import React from "react";
import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";

import FreePaint from "free-paint/FreePaint";

import urls from "_data/_routes/routeUrls";

const ArtRoutes = () => {
  return (
    <Routes>
      <Route path={urls.freePaint} element={<Window><FreePaint /></Window>} />
    </Routes>
  );
};

export default ArtRoutes;