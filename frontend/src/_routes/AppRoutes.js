import React from "react";
import { Routes, Route } from "react-router-dom";

import Window from "../_components/window/Window";
import LandingPage from "../landing-page/LandingPage";
import Activities from "../landing-page/activities/Activities";
import WordToMusic from '../music-decoder/WordToMusic';
import SequenceMaker from '../sequence-maker/SequenceMaker';
import InstrumentId from "../instrument-id/InstrumentId";
import ScoreKeeper from '../score-keeper/ScoreKeeper';
import NotFound from "./NotFound";

import urls from "./routeUrls";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Window smallWindow><LandingPage /></Window>} />
      <Route path={urls.artGames} element={<Window smallWindow><Activities category={'art'} /></Window>} />
      <Route path={urls.musicGames} element={<Window smallWindow><Activities category={'music'} /></Window>} />
      <Route path={urls.allGames} element={<Window smallWindow><Activities category={'all'} /></Window>} />
      <Route path={urls.wordToMusicUrl} element={<Window><WordToMusic /></Window>} />
      <Route path={urls.sequencerUrl} element={<Window><SequenceMaker /></Window>} />
      <Route path={urls.sequencerUrl} element={<Window><InstrumentId /></Window>} />
      <Route path={urls.scoreKeeperUrl} element={<Window><ScoreKeeper /></Window>} />
      <Route path="*" element={<Window smallWindow><NotFound /></Window>}/>
    </Routes>
  );
};

export default AppRoutes;