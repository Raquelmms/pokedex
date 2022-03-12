import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ImgCard } from "./styled";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";

import { Button, CardActionArea, CardActions } from "@mui/material";

const PokedexCard = (props) => {
  const { states, sets } = useContext(GlobalStateContext)
  const pokemon = useRequestData({}, `${BASE_URL}${props.name}`)[0];

  const toRemove = (poke, index) => {
    sets.setCount(states.count - 1)
    const newPokeInHome = { ...poke }
    const newPokeHome = [...states.pokemonsHome, newPokeInHome]
    sets.setPokemonsHome(newPokeHome)
    if (pokemon === poke) {
      states.pokedex.splice(index, 1)
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onClick={props.onClickCard}
      >
        <ImgCard src={pokemon.sprites && pokemon.sprites.other["official-artwork"].front_default} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="secondary"
          >
            {pokemon.name &&
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <Button onClick={() => toRemove(pokemon, props.index)} size="small" color="error" variant="contained">
          Remover
        </Button>
        <Button onClick={props.onClickCardBtnDetails} color="success" variant="contained" size="small" >Ver detalhes</Button>
      </CardActions>
    </Card>
  );
};

export default PokedexCard;
