import React from "react";
import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";

import LandingPage from "home/Home";
import Menu from "home/menu/Menu";

import urls from "_routes/routeUrls";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route index element={<Window small><LandingPage /></Window>} />
      <Route path={urls.artGames} element={<Window small><Menu type={'art'} /></Window>} />
      <Route path={urls.musicGames} element={<Window small><Menu type={'music'} /></Window>} />
      <Route path={urls.allGames} element={<Window small><Menu type={'all'} /></Window>} />
    </Routes>
  );
};

export default MenuRoutes;