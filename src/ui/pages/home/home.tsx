import { Grid } from "@mui/material";
import { BoxContainer } from "../../components/box-container";
import { useHandlePokemon } from "./hooks/useHandlePokemon";
import { PokemonCardsDisplay } from "./components/pokemon-cards-display";
import HomeDetailView from "./detail/home-detail-view";
import { usePokemonDetail } from "./hooks/usePokemonDetail";
import { useHandleFavoritePokemon } from "../favorite-pokemon/hooks/useHandleFavoritePokemon";

const HomeView = () => {
  const { pokemonesResult } = useHandlePokemon();
  const { goToDetail, onCloseDetail, selectedPokemon } = usePokemonDetail();
  const {saveFavoritePokemon,deleteFavoritePokemon,isPokemonFavorite} = useHandleFavoritePokemon()
  return (
    <>
      <BoxContainer>
        <Grid container id="container-pokemon-cards" spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <PokemonCardsDisplay 
            data={pokemonesResult?.results ?? []} 
            onHandleFavorite={(id) => isPokemonFavorite(+id) ? deleteFavoritePokemon(+id) : saveFavoritePokemon(id)}
            isFavorite={isPokemonFavorite}
            goToDetail={goToDetail} 
          />
        </Grid>
      </BoxContainer>
      {selectedPokemon && <HomeDetailView onClose={onCloseDetail} selectedPokemon={selectedPokemon} />}
    </>
  );
};

export default HomeView;
