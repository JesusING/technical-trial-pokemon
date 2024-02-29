import { Typography } from "@mui/material";
import { Card } from "../../../components/card/card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { COLORS } from "../../../../app-config/constants";
import { IPokemonPreview } from "../../../../infrastructure/interfaces/pokemon-interface";

const PokemonCard = (props: { pokemon: IPokemonPreview; isFavorite: boolean; onHandleFavorite: () => void, goToDetail: () => void }) => {
  const { pokemon, isFavorite, onHandleFavorite, goToDetail } = props;

  return (
    <Card key={pokemon.name} id={"id-card-" + pokemon.name} title={pokemon.name}>
      <div style={{display: "flex", justifyContent: "space-between",marginRight: 10}}>
        <Typography color={COLORS.secondary} variant="body1" onClick={() => goToDetail()}>{"Click for more details..."}</Typography>
        {isFavorite ? (
          <FavoriteIcon sx={{cursor: "pointer"}} onClick={() => onHandleFavorite()} />
        ) : (
          <FavoriteBorderIcon sx={{cursor: "pointer"}} onClick={() => onHandleFavorite()} />
        )}
      </div>
    </Card>
  );
};

export default PokemonCard;
