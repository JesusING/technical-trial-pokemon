import { SxProps, Theme } from "@mui/material";
import { COLORS } from "../constants";

export const layoutStyles = () => {
  const link_style: SxProps<Theme> = {
    "&&:hover": {
      cursor: "pointer",
      textDecoration: "underline"
    }
  };

  const current_route_style: SxProps<Theme> = {
    color: COLORS.navigate,
    textDecoration: "underline"
  };

  return {
    link_style,
    current_route_style
  };
};
