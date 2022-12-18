import React from "react";
import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";
import Learn from "color-theory/learn/Learn";
import LearnColors from "color-theory/learn/colors/LearnColors";
import Play from "color-theory/play/Play";

import { colorTheoryUrls } from "_data/_routes/routeUrls";

const ColorTheoryRoutes = () => {
  return (
    <Routes>
      {/* Learn */}
      <Route path={colorTheoryUrls.learn} element={<Window><Learn /></Window>} />
      <Route path={colorTheoryUrls.learnCategory} element={<Window><LearnColors /></Window>} />
      <Route path={colorTheoryUrls.play} element={<Window><Play /></Window>} />
    </Routes>
  );
};

export default ColorTheoryRoutes;