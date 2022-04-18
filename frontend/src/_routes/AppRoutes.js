import React from "react";
import { Routes, Route } from "react-router-dom";

import Window from "../_components/window/Window";
import LandingPage from "../landing-page/LandingPage";
import Activities from "../landing-page/activities/Activities";
import WordToMusic from '../music-decoder/WordToMusic';
import SequenceMaker from '../sequence-maker/SequenceMaker';
import ScoreKeeper from '../score-keeper/ScoreKeeper';

import urls from "./routeUrls";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Window customStyles={{width: '70%'}}><LandingPage /></Window>} />
      <Route path={urls.artGames} element={<Window customStyles={{width: '70%'}}><Activities category={'art'} /></Window>} />
      <Route path={urls.musicGames} element={<Window customStyles={{width: '70%'}}><Activities category={'music'} /></Window>} />
      <Route path={urls.allGames} element={<Window customStyles={{width: '70%'}}><Activities category={'all'} /></Window>} />
      <Route path={urls.wordToMusicUrl} element={<Window><WordToMusic /></Window>} />
      <Route path={urls.sequencerUrl} element={<Window><SequenceMaker /></Window>} />
      <Route path={urls.scoreKeeperUrl} element={<Window><ScoreKeeper /></Window>} />
    </Routes>
  );
};

export default AppRoutes;