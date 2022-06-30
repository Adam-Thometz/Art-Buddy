import React from "react";
import { Routes, Route } from "react-router-dom";

import Window from "../_components/window/Window";
import LandingPage from "../menu-landing/LandingPage";
import Menu from "../menu-landing/menu/Menu";

import WordToMusic from '../music-decoder/WordToMusic';
import SequenceMaker from '../sequence-maker/SequenceMaker';
import JumpIntoRhythm from "../jump-into-rhythm/JumpIntoRhythm";
import InstrumentId from "../instrument-id/InstrumentId";
  import Learn from "../instrument-id/learn/learn-main/Learn";
  import LearnFamilyPage from "../instrument-id/learn/family/LearnFamilyPage";
  import Instrument from "../instrument-id/learn/instrument/Instrument";
  import Play from '../instrument-id/play/play-main/Play';
  import ListeningSkills from "../instrument-id/play/listening-skills/ListeningSkills";
  import ListeningSkillsTest from "../instrument-id/play/listening-skills/level/ListeningSkillsTest";
  import SongMaker from "../instrument-id/play/song-maker/SongMaker";

import ScoreKeeper from '../score-keeper/ScoreKeeper';
import NotFound from "./NotFound";

import urls, { instrumentIdUrls } from "./routeUrls";

const ArtBuddyRoutes = () => {
  return (
    <Routes>
      <Route index element={
        <Window small>
          <LandingPage />
        </Window>
      } />
      {/* MENUS */}
      <Route path={urls.artGames} element={
        <Window small>
          <Menu type={'art'} />
        </Window>} />
      <Route path={urls.musicGames} element={
        <Window small>
          <Menu type={'music'} />
        </Window>} />
      <Route path={urls.allGames} element={
        <Window small>
          <Menu type={'all'} />
        </Window>} />

      {/* MUSIC GAMES */}

      {/* Word To Music Decoder */}
      <Route path={urls.wordToMusic} element={
        <Window>
          <WordToMusic />
        </Window>} />

      {/* Sequence Maker */}
      <Route path={urls.sequenceMaker} element={
        <Window>
          <SequenceMaker />
        </Window>} />
      
      {/* Jump Into Rhythm */}
      <Route path={urls.jumpIntoRhythm} element={
        <Window>
          <JumpIntoRhythm />
        </Window>
      } />

      {/* What's That Instrument? */}
      <Route path={urls.instrumentId} element={
        <Window>
          <InstrumentId />
        </Window>} />

        {/* Learn */}
        <Route path={instrumentIdUrls.learn} element={
          <Window>
            <Learn />
          </Window>}/>

        <Route path={instrumentIdUrls.learnFamily} element={
          <Window>
            <LearnFamilyPage />
          </Window>}/>

        <Route path={instrumentIdUrls.learnInstrument} element={
          <Window>
            <Instrument />
          </Window>}/>

        {/* Play */}
        <Route path={instrumentIdUrls.play} element={
          <Window>
            <Play />
          </Window>} />

        <Route path={instrumentIdUrls.playListening} element={
          <Window>
            <ListeningSkills />
          </Window>} />

        <Route path={instrumentIdUrls.playListeningLevel} element={
          <Window>
            <ListeningSkillsTest />
          </Window>} />
        
        <Route path={instrumentIdUrls.playSongMaker} element={
          <Window>
            <SongMaker />
          </Window>
        } />
      
      {/* TOOLS */}
      {/* Score Keeper */}
      <Route path={urls.scoreKeeper} element={
        <Window>
          <ScoreKeeper />
        </Window>} />
      
      {/* GENERAL 404 HANDLER */}
      <Route path="*" element={
        <Window small>
          <NotFound />
        </Window>}/>
    </Routes>
  );
};

export default ArtBuddyRoutes;