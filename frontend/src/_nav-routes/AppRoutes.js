import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "../landing-page/LandingPage";
import WordToMusic from '../music-decoder/WordToMusic';
import SequenceMaker from '../sequence-maker/SequenceMaker';
import ScoreKeeper from '../score-keeper/ScoreKeeper';

import urls from "./routeUrls";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path={urls.wordToMusicUrl} element={<WordToMusic />} />
      <Route path={urls.sequencerUrl} element={<SequenceMaker />} />
      <Route path={urls.scoreKeeperUrl} element={<ScoreKeeper />} />
    </Routes>
  );
};

export default AppRoutes;