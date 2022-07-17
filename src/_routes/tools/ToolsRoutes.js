import React from "react";
import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";

import ScoreKeeper from "score-keeper/ScoreKeeper";

import urls from "../routeUrls";

const ToolsRoutes = () => {
  return (
    <Routes>
      <Route path={urls.scoreKeeper} element={<Window><ScoreKeeper /></Window>} />
    </Routes>
  );
};

export default ToolsRoutes;