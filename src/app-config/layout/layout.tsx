import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { layoutStyles } from "./layout-styles";

const Layout = () => {
  const navigate = useNavigate()
  const styles = layoutStyles();
  const getCurrentRoute = (route: string) => {
    return window.location.pathname.includes(route)
  }
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => navigate(ROUTES.home)}
        >
          <img width={250} height={100} src="src/assets/International_pokemon_logo.svg.png" alt="pokemon-logo"></img>
        </IconButton>
        <div style={{display: "flex", columnGap: 20}}>
        <Typography sx={getCurrentRoute(ROUTES.home) ?  styles.current_route_style : styles.link_style} onClick={() => navigate(ROUTES.home)} variant="h6" color="inherit" component="div">
          Pokemon List
        </Typography>
        <Typography sx={getCurrentRoute(ROUTES.favourites) ?  styles.current_route_style : styles.link_style} onClick={() => navigate(ROUTES.favourites)}  variant="h6" color="inherit" component="div">
          Favorites
        </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Layout;


