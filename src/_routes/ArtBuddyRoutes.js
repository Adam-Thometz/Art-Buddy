import React from "react";
import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";

import LandingPage from "home/Home";
import Menu from "home/menu/Menu";

import WordToMusic from 'music-decoder/WordToMusic';
import SequenceMaker from 'sequence-maker/SequenceMaker';
import JumpIntoRhythm from "jump-into-rhythm/JumpIntoRhythm";
import InstrumentId from "instrument-id/InstrumentId";
  import Learn from "instrument-id/learn/learn-main/Learn";
  import LearnFamilyPage from "instrument-id/learn/family/LearnFamilyPage";
  import Instrument from "instrument-id/learn/instrument/Instrument";
  import Play from 'instrument-id/play/Play';
  import ListeningSkills from "instrument-id/play/listening-skills/ListeningSkills";
  import ListeningSkillsTest from "instrument-id/play/listening-skills/level/ListeningSkillsTest";
  import SongMaker from "instrument-id/play/song-maker/SongMaker";

import ScoreKeeper from "score-keeper/ScoreKeeper";

import NotFound from "./not-found/NotFound";

import urls, { instrumentIdUrls } from "./routeUrls";

const ArtBuddyRoutes = () => {
  return (
    <Routes>
      {/* MENU ROUTES */}
      <Route index element={<Window small><LandingPage /></Window>} />
      <Route path={urls.artGames} element={<Window small><Menu type={'art'} /></Window>} />
      <Route path={urls.musicGames} element={<Window small><Menu type={'music'} /></Window>} />
      <Route path={urls.allGames} element={<Window small><Menu type={'all'} /></Window>} />

      {/* MUSIC GAME ROUTES */}
      <Route path={urls.wordToMusic} element={<Window><WordToMusic /></Window>} />
      <Route path={urls.sequenceMaker} element={<Window><SequenceMaker /></Window>} />
      <Route path={urls.jumpIntoRhythm} element={<Window><JumpIntoRhythm /></Window>} />
      <Route path={urls.instrumentId} element={<Window><InstrumentId /></Window>} />
        {/* What's That Instrument? Learn section */}
        <Route path={instrumentIdUrls.learn} element={<Window><Learn /></Window>}/>
        <Route path={instrumentIdUrls.learnFamily} element={<Window><LearnFamilyPage /></Window>}/>
        <Route path={instrumentIdUrls.learnInstrument} element={<Window><Instrument /></Window>}/>
        {/* What's That Instrument? Play section */}
        <Route path={instrumentIdUrls.play} element={<Window><Play /></Window>} />
        <Route path={instrumentIdUrls.playListening} element={<Window><ListeningSkills /></Window>} />
        <Route path={instrumentIdUrls.playListeningLevel} element={<Window><ListeningSkillsTest /></Window>} />
        <Route path={instrumentIdUrls.playSongMaker} element={<Window><SongMaker /></Window>} />
      
      {/* TOOLS ROUTES */}
      <Route path={urls.scoreKeeper} element={<Window><ScoreKeeper /></Window>} />

      {/* GENERAL 404 HANDLER */}
      <Route path="*" element={<Window small><NotFound /></Window>} />
    </Routes>
  );
};

export default ArtBuddyRoutes;