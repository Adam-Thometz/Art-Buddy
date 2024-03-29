import { Route, Routes } from "react-router-dom";

import MenuRoutes from "./menu/MenuRoutes";
import MusicRoutes from "./music/MusicRoutes";
import ArtRoutes from "./art/ArtRoutes";
import ToolsRoutes from "./tools/ToolsRoutes";

import Window from "components/window/Window";
import NotFound from "./_not-found/NotFound";

import getRoutes from "utils/_general/getRoutes";

const ArtBuddyRoutes = () => {
  return (
    <Routes>
      {getRoutes(MenuRoutes)}
      {getRoutes(MusicRoutes)}
      {getRoutes(ArtRoutes)}
      {getRoutes(ToolsRoutes)}
      {/* GENERAL 404 HANDLER */}
      <Route path="*" element={<Window small><NotFound /></Window>} />
    </Routes>
  );
};

export default ArtBuddyRoutes;
