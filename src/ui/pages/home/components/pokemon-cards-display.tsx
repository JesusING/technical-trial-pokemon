import { Grid } from "@mui/material";
import PokemonCard from "./pokemon-card";
import { useResponsiveGrid } from "../../../../hooks/useResponsiveGrid";
import { NoRecordsFound } from "../../../components/no-records-found/no-records-found";
import { IPokemonPreview } from "../../../../infrastructure/interfaces/pokemon-interface";

interface ICardsDisplay {
  data: IPokemonPreview[];
  goToDetail: (id: string) => void;
  isFavorite: (id:number) => boolean;
  onHandleFavorite: (id: string) => void;
}

export const PokemonCardsDisplay = (props: ICardsDisplay) => {
  const { data, goToDetail, isFavorite,onHandleFavorite } = props;
  const { handleMediaQuery } = useResponsiveGrid();
  const columns = handleMediaQuery(4, 3, 2, 2);
  const CARD_GRID_MD = Math.round(12 / columns);
  const CARD_GRID_SM = Math.round(8 / columns);

  return data?.length && data.length > 0 ? (
    <>
      {(data as IPokemonPreview[]).map(pokemon => {
        const pokemonId = pokemon.url.split("/")[6];
        return (
          <Grid item xs={12} pb={2} sm={CARD_GRID_SM} md={CARD_GRID_MD} lg={CARD_GRID_MD} key={`grid-card-${pokemon.name}`}>
            <PokemonCard
              goToDetail={() => goToDetail(pokemonId)}
              pokemon={pokemon}
              isFavorite={isFavorite(+pokemonId)}
              onHandleFavorite={() => onHandleFavorite(pokemonId)}
            />
          </Grid>
        );
      })}
    </>
  ) : (
    <NoRecordsFound />
  );
};
