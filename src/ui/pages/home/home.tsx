import { Grid } from "@mui/material";
import { BoxContainer } from "../../components/box-container";
import { useHandlePokemon } from "./hooks/useHandlePokemon";
import { PokemonCardsDisplay } from "./components/pokemon-cards-display";
import HomeDetailView from "./detail/home-detail-view";
import { usePokemonDetail } from "./hooks/usePokemonDetail";

const HomeView = () => {
  const { pokemonesResult } = useHandlePokemon();
  const { goToDetail, onCloseDetail, selectedPokemon } = usePokemonDetail();
  return (
    <>
      <BoxContainer>
        <Grid container id="container-pokemon-cards" spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <PokemonCardsDisplay data={pokemonesResult?.results ?? []} goToDetail={goToDetail} />
        </Grid>
      </BoxContainer>
      {selectedPokemon && <HomeDetailView onClose={onCloseDetail} selectedPokemon={selectedPokemon} />}
    </>
  );
};

export default HomeView;
