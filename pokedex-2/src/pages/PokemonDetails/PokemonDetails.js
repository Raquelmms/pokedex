import React, { useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { useParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { CardPokemonDetail, TypeContainer, CardStatsPoke, ButtonContainer, SkillContainer } from './styled'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PokemonTypes from "../../components/PokemonTypes/PokemonTypes";
import { ScrollArea } from '@mantine/core';

const PokemonDetails = () => {
    const pathParams = useParams();
    const pokemon = useRequestData({}, `${BASE_URL}${pathParams.id}`)[0];
    const [currentInfo, setCurrentInfo] = useState("Estatísticas")

    const statList =
        pokemon.stats &&
        pokemon.stats.map((statPoke) => {
            return (
                <TypeContainer>
                    <ProgressBar
                        key={statPoke.stat.name}
                        statText={statPoke.stat.name}
                        value={(statPoke.base_stat / 255) * 100}
                        label={statPoke.base_stat}
                    />
                </TypeContainer>
            );
        });

    const pokeType = pokemon.types && pokemon.types.map((type) => {
        return (<div>
            <PokemonTypes element={type.type.name} />
        </div>)
    })

    const pokeSkills = pokemon.moves && pokemon.moves.map((move) => {
        return <Typography sx={{ margin: '0.75rem', '@media (max-width: 450px)': { margin: '0.5rem' } }}>{move.move.name.toUpperCase()}</Typography>
    })

    const onClickButton = (buttonName) => {
        setCurrentInfo(buttonName)
    }

    return (
        <CardPokemonDetail>
            <Typography variant='h4' color='#5F5950' sx={{ mt: '2%' }}>{pokemon.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Typography>
            <img
                src={
                    pokemon.sprites &&
                    pokemon.sprites.other["official-artwork"].front_default
                }
                alt="Pokemons imagens"
            />
            <ButtonContainer>
                <Button sx={{ width: '180px' }} variant="contained" onClick={() => onClickButton("Estatísticas")}>Estatísticas</Button>
                <Button sx={{ width: '180px' }} variant="contained" onClick={() => onClickButton("Tipos")}>Tipos</Button>
                <Button sx={{ width: '180px' }} variant="contained" onClick={() => onClickButton("Habilidades")}>Habilidades</Button>
            </ButtonContainer>
            <CardStatsPoke>
                {currentInfo === "Estatísticas" && statList}
                <TypeContainer>
                    {currentInfo === "Tipos" && pokeType}
                </TypeContainer>
                {currentInfo === "Habilidades" && (<ScrollArea style={{ height: 250 }}><SkillContainer>{pokeSkills}</SkillContainer></ScrollArea>)}
            </CardStatsPoke>
        </CardPokemonDetail>
    );
};

export default PokemonDetails;
