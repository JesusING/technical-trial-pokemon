import { SxProps, Theme } from "@mui/material";

export const cardStyles = () => {
  const card_style: SxProps<Theme> = {
    boxShadow: "0px 3px 6px #00000029",
    borderLeft: "8px solid transparent",
    borderRadius: "8px",
    height: "100%",
  };

  return {
    card_style
  };
};
