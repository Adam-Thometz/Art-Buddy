import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";
import FreePaint from "views/free-paint/FreePaint";
import ColorTheory from "views/color-theory/ColorTheory";
import ColorTheoryRoutes from "./color-theory/ColorTheoryRoutes";

import urls from "_routes/routeUrls";
import getRoutes from "_utils/_general/getRoutes";

const ArtRoutes = () => {
  return (
    <Routes>
      <Route path={urls.freePaintUrl} element={<Window><FreePaint /></Window>} />
      <Route path={urls.colorTheoryUrl} element={<Window><ColorTheory /></Window>} />
      {getRoutes(ColorTheoryRoutes)}
    </Routes>
  );
};

export default ArtRoutes;
