import React from "react";
import { Routes, Route } from "react-router-dom";

import Window from "../_components/window/Window";
import LandingPage from "../menu-landing/LandingPage";
import Menu from "../menu-landing/menu/Menu";
import WordToMusic from '../music-decoder/WordToMusic';
import SequenceMaker from '../sequence-maker/SequenceMaker';
import InstrumentId from "../instrument-id/InstrumentId";
  import Learn from "../instrument-id/learn/learn-main/Learn";
  import LearnFamilyPage from "../instrument-id/learn/family/LearnFamilyPage";
import ScoreKeeper from '../score-keeper/ScoreKeeper';
import NotFound from "./NotFound";

import urls, { instrumentIdUrls } from "./routeUrls";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Window small><LandingPage /></Window>} />
      {/* MENUS */}
      <Route path={urls.artGames} element={<Window small><Menu type={'art'} /></Window>} />
      <Route path={urls.musicGames} element={<Window small><Menu type={'music'} /></Window>} />
      <Route path={urls.allGames} element={<Window small><Menu type={'all'} /></Window>} />

      {/* MUSIC GAMES */}
      {/* Word To Music Decoder */}
      <Route path={urls.wordToMusicUrl} element={<Window><WordToMusic /></Window>} />
      {/* Sequence Maker */}
      <Route path={urls.sequencerUrl} element={<Window><SequenceMaker /></Window>} />
      {/* What's That Instrument? */}
      <Route path={urls.instrumentIdUrl} element={<Window><InstrumentId /></Window>} />
        {/* Learn */}
        <Route path={instrumentIdUrls.learnUrl} element={<Window><Learn /></Window>}/>
        <Route path={instrumentIdUrls.learnFamilyUrl} element={<Window><LearnFamilyPage /></Window>}/>
        <Route path={instrumentIdUrls.learnInstrumentUrl} element={<Window><LearnFamilyPage /></Window>}/>
      
      {/* TOOLS */}
      {/* Score Keeper */}
      <Route path={urls.scoreKeeperUrl} element={<Window><ScoreKeeper /></Window>} />
      
      {/* GENERAL 404 HANDLER */}
      <Route path="*" element={<Window small><NotFound /></Window>}/>
    </Routes>
  );
};

export default AppRoutes;