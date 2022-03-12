import React from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";
import PokedexCard from "./PokedexCard";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../routes/coordinator";
import { CardContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
import ImgPokedexEmpty from "../../components/ImgPokedexEmpty/ImgPokedexEmpty";

const Pokedex = () => {
  const { states, loading } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const pokedexList =
    states.pokedex &&
    states.pokedex.sort((a, b) => {
      return a.id - b.id
    })
      .map((pokemon, index) => {
        return (
          <PokedexCard
            key={pokemon.name}
            name={pokemon.name}
            onClickCard={() => goToPokemonDetail(navigate, pokemon.name)}
            onClickCardBtnDetails={() => goToPokemonDetail(navigate, pokemon.name)}
            index={index}
          />
        );
      });
  return (
    <div>
      <CardContainer>
        {loading && <Loading />}
        {!loading && states.pokedex && pokedexList}
        {!loading && states.pokedex.length === 0 && (
          <ImgPokedexEmpty />
        )}
      </CardContainer>
    </div>
  );
};

export default Pokedex;
