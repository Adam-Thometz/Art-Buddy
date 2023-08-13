import { Route, Routes } from "react-router-dom";

import Window from "components/window/Window";

import Home from "views/home/Home";
import Menu from "views/home/menu/Menu";

import urls from "routes/routeUrls";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route index element={<Window small><Home /></Window>} />
      <Route path={urls.artGames} element={<Window small><Menu type={"art"} /></Window>} />
      <Route path={urls.musicGames} element={<Window small><Menu type={"music"} /></Window>} />
      <Route path={urls.allGames} element={<Window small><Menu type={"all"} /></Window>} />
    </Routes>
  );
};

export default MenuRoutes;
