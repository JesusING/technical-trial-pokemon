import { Grid } from "@mui/material";
import { BoxContainer } from "../../components/box-container";
import { useHandleFavoritePokemon } from "../favorite-pokemon/hooks/useHandleFavoritePokemon";
import { FavoritePokemonCardsDisplay } from "./components/favorite-pokemon-card-display";

const FavoriteView = () => {
  const { pokemonState } = useHandleFavoritePokemon();
  return (
    <>
      <BoxContainer>
        <Grid container id="container-pokemon-cards" spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <FavoritePokemonCardsDisplay
            data={
              pokemonState?.sort((a, b) => {
                if (a.id > b.id) {
                  return 1;
                }
                if (a.id < b.id) {
                  return -1;
                }
                return 0;
              }) ?? []
            }
          />
        </Grid>
      </BoxContainer>
    </>
  );
};

export default FavoriteView;
