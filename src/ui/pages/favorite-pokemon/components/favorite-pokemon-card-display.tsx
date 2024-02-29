import { Grid } from "@mui/material";
import FavoritePokemonCard from "./favorite-pokemon-card";
import { Pokemon } from "../../../../domain/models/pokemon";
import { useResponsiveGrid } from "../../../../hooks/useResponsiveGrid";
import { NoRecordsFound } from "../../../components/no-records-found/no-records-found";

interface ICardsDisplay {
  data: Pokemon[];
}

export const FavoritePokemonCardsDisplay = (props: ICardsDisplay) => {
  const { data } = props;
  const { handleMediaQuery } = useResponsiveGrid();
  const columns = handleMediaQuery(4, 3, 2, 2);
  const CARD_GRID_MD = Math.round(12 / columns);
  const CARD_GRID_SM = Math.round(8 / columns);

  return data?.length && data.length > 0 ? (
    <>
      {data.map(pokemon => {
        return (
          <Grid item xs={12} sm={CARD_GRID_SM} md={CARD_GRID_MD} lg={CARD_GRID_MD} key={`grid-card-${pokemon.name}`}>
            <FavoritePokemonCard
              pokemon={pokemon}
            />
          </Grid>
        );
      })}
    </>
  ) : (
    <NoRecordsFound />
  );
};
