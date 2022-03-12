import PokeCard from "./PokeCard";
import { CardContainer, InputContainer, BodyContent } from "./styled";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../routes/coordinator";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext, useState } from "react";
import { Input } from '@mantine/core';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AlertSuccess from "../../components/AlertSuccess/AlertSuccess";

const Home = () => {
  const { states, loading, sets } = useContext(GlobalStateContext)
  const [query, setQuery] = useState("")


  const handleChange = (event, value) => {
    sets.setCurrentPage(value);
  };

  const updateQuery = (event) => {
    setQuery(event.target.value)
  }
  
  const onClickSetAlert = () => {
    sets.setAlertValue(false)
  }

  const navigate = useNavigate();

  const pokemonList =
    states.pokemonsHome &&
    states.pokemonsHome.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(query.toLowerCase())
    })
      .map((pokemon, index) => {
        return (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            onClickCard={() => goToPokemonDetail(navigate, pokemon.name)}
            onClickCardBtnDetails={() => goToPokemonDetail(navigate, pokemon.name)}
            index={index}
          />
        );
      });

  return (<BodyContent>
    <AlertSuccess alertValue={states.alertValue} onClickAlert={onClickSetAlert} />
    <InputContainer>
      <Input size="md"
        icon={<SearchIcon />}
        placeholder="Buscar Pokemon"
        onChange={updateQuery}
        value={query}
      />
    </InputContainer>
    <CardContainer>
      {loading && <Loading />}
      {!loading && states.pokemonsHome && pokemonList}
    </CardContainer>
    <Stack spacing={2}>
      <Pagination count={38} page={states.currentPage} onChange={handleChange} sx={{ mb: '20px' }} />
    </Stack>
  </BodyContent>

  );
};

export default Home;
