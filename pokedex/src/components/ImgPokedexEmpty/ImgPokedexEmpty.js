import React from 'react'
import PokedexEmpty from '../../assets/pokedex-empty.webp'
import { Container, ImgStyle } from './styled'
import Typography from "@mui/material/Typography";
import PokebolaNav from "../../assets/PokebolaNav.svg";

const ImgPokedexEmpty = () => {
    return (
        <Container>
            <ImgStyle src={PokedexEmpty} alt='Imagem de Placeholder' />
            <Typography variant='h4' sx={{ mb: '1rem' }} color='#5F5950'>Vá Pegar Todos</Typography>
            <img id='img-pokebola' src={PokebolaNav} alt="Pokebola" />
        </Container>
    )
}

export default ImgPokedexEmpty