import { Route, Routes } from "react-router-dom";

import Window from "components/window/Window";
import LearnColorTheory from "views/color-theory/learn/LearnColorTheory";
import LearnColors from "views/color-theory/learn/colors/LearnColors";
import Play from "views/color-theory/play/Play";
import PlayLevel from "views/color-theory/play/level/PlayLevel";

import { colorTheoryUrls } from "routes/routeUrls";

const ColorTheoryRoutes = () => {
  return (
    <Routes>
      {/* Learn */}
      <Route path={colorTheoryUrls.learn} element={<Window><LearnColorTheory /></Window>} />
      <Route path={colorTheoryUrls.learnCategory} element={<Window><LearnColors /></Window>} />
      {/* Play */}
      <Route path={colorTheoryUrls.playMain} element={<Window><Play /></Window>} />
      <Route path={colorTheoryUrls.playLevel} element={<Window><PlayLevel /></Window>} />
    </Routes>
  );
};

export default ColorTheoryRoutes;
