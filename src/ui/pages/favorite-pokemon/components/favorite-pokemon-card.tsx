import { Typography } from "@mui/material";
import { Card } from "../../../components/card/card";
import { COLORS } from "../../../../app-config/constants";
import { Pokemon } from "../../../../domain/models/pokemon";

const FavoritePokemonCard = (props: { pokemon: Pokemon }) => {
  const { pokemon } = props;

  return (
    <Card key={pokemon.name} id={"id-card-" + pokemon.name} title={pokemon.name}>
      <Typography color={COLORS.secondary} variant="body1">{`Pokemon id: ${pokemon.id}`}</Typography>
      <img width={200} height={200} src={pokemon.sprites.other.home.front_default} alt={`pokemon-image-${pokemon.name}`}></img>

      <div style={{ display: "flex", justifyContent: "space-between", marginRight: 10 }}>
        <Typography color={COLORS.secondary} variant="body1">{`Height: ${pokemon.height}`}</Typography>
        <Typography color={COLORS.secondary} variant="body1">{`Weight: ${pokemon.weight}`}</Typography>
      </div>
    </Card>
  );
};

export default FavoritePokemonCard;
