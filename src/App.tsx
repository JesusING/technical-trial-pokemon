import "./App.css";
import { register } from "./di.register";
import Redirect from "./ui/pages/redirect-view";
import HomeView from "./ui/pages/home/home";
import { ROUTES } from "./app-config/routes";
import { Container } from "./app-config/container/container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavouriteView from "./ui/pages/favorite-pokemon";

function App(props: { layout: React.ReactElement }) {
  const { layout } = props;

  const internalRegister = (register: (container: typeof Container) => void) => {
    Container.unbindAll();
    register(Container);
  };
  internalRegister(register);

  return (
    <BrowserRouter>
      <>
        {layout}
        <Routes>
          <Route path={`${ROUTES.home}/*`} element={<HomeView />} />
          <Route path={`${ROUTES.favourites}/*`}
            element={<FavouriteView />}
          />
          <Route path="*" element={<Redirect/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
