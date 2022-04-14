import React from "react";
import { Routes, Route } from "react-router-dom";

import Window from "../_common/window/Window";
import LandingPage from "../landing-page/LandingPage";
import WordToMusic from '../music-decoder/WordToMusic';
import SequenceMaker from '../sequence-maker/SequenceMaker';
import ScoreKeeper from '../score-keeper/ScoreKeeper';

import urls from "./routeUrls";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Window><LandingPage /></Window>} />
      <Route path={urls.wordToMusicUrl} element={<Window><WordToMusic /></Window>} />
      <Route path={urls.sequencerUrl} element={<Window><SequenceMaker /></Window>} />
      <Route path={urls.scoreKeeperUrl} element={<Window><ScoreKeeper /></Window>} />
    </Routes>
  );
};

export default AppRoutes;