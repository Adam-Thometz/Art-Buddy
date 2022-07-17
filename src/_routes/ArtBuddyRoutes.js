import React from "react";
import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";

import MenuRoutes from "./menu/MenuRoutes";
import MusicRoutes from "./music/MusicRoutes";
import ToolsRoutes from "./tools/ToolsRoutes";
import NotFound from "./not-found/NotFound";

import getRoutes from "_helpers/_utils/getRoutes";

const ArtBuddyRoutes = () => {
  return (
    <Routes>
      {getRoutes(MenuRoutes)}
      {getRoutes(MusicRoutes)}
      {getRoutes(ToolsRoutes)}
      {/* GENERAL 404 HANDLER */}
      <Route path="*" element={<Window small><NotFound /></Window>} />
    </Routes>
  );
};

export default ArtBuddyRoutes;