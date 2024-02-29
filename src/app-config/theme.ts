import { createTheme } from "@mui/material/styles";
import { COLORS } from "./constants";
const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    background: {
      default: COLORS.background,
    },
    warning: {
      main: COLORS.warning,
    },
    error: {
      main: COLORS.alert,
    },
  },

  spacing: 16,
  shape: {
    borderRadius: 6,
  },
});

export default theme;
