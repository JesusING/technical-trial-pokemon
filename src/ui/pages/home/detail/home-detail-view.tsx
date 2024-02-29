import { COLORS } from "../../../../app-config/constants";
import { IPokemon } from "../../../../infrastructure/interfaces/pokemon-interface";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

const HomeDetailView = (props: { selectedPokemon: IPokemon, onClose: () => void }) => {
  const { selectedPokemon, onClose } = props;

  return (
    <Dialog open maxWidth={"xs"} fullWidth>
      <DialogTitle sx={{backgroundColor: COLORS.primary, color: COLORS.white}}>{selectedPokemon.name}</DialogTitle>
      <DialogContent sx={{ display: "grid" }}>
        <img width={200} height={200} src={selectedPokemon.sprites.other.home.front_default} alt={`pokemon-image-${selectedPokemon.name}`}></img>
        <Typography>TRAITS:</Typography>
        <div style={{ display: "flex" }}>
          <Typography>{`Weight: ${selectedPokemon.weight}`}</Typography>
          <Typography>{`Height: ${selectedPokemon.height}`}</Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
            CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HomeDetailView;
