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
  import Instrument from "../instrument-id/learn/instrument/Instrument";
  import Play from '../instrument-id/play/play-main/Play';
  import ListeningSkills from "../instrument-id/play/listening-skills/ListeningSkills";
  import ListeningSkillsTest from "../instrument-id/play/listening-skills/level/ListeningSkillsTest";
import ScoreKeeper from '../score-keeper/ScoreKeeper';
import NotFound from "./NotFound";

import urls, { instrumentIdUrls } from "./routeUrls";
import ReportCardIcon from "../_components/window-nav/corner-icons/report-card/ReportCardIcon";
import HelpIcon from "../_components/window-nav/corner-icons/help/HelpIcon";
import SongMaker from "../instrument-id/play/song-maker/SongMaker";
import SavedSongsIcon from "../_components/window-nav/corner-icons/saved-songs/SavedSongsIcon";

const ArtBuddyRoutes = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      {/* MENUS */}
      <Route path={urls.artGames} element={
        <Window small page='ART GAMES'>
          <Menu type={'art'} />
        </Window>} />
      <Route path={urls.musicGames} element={
        <Window small page='MUSIC GAMES'>
          <Menu type={'music'} />
        </Window>} />
      <Route path={urls.allGames} element={
        <Window small page='ALL GAMES'>
          <Menu type={'all'} />
        </Window>} />

      {/* MUSIC GAMES */}

      {/* Word To Music Decoder */}
      <Route path={urls.wordToMusicUrl} element={
        <Window page='WORD-TO-MUSIC DECODER'>
          <WordToMusic />
        </Window>} />

      {/* Sequence Maker */}
      <Route path={urls.sequencerUrl} element={
        <Window page='SEQUENCE MAKER'>
          <SequenceMaker />
        </Window>} />

      {/* What's That Instrument? */}
      <Route path={urls.instrumentIdUrl} element={
        <Window icon={<HelpIcon />} page='INSTRUMENT ID'>
          <InstrumentId />
        </Window>} />

        {/* Learn */}
        <Route path={instrumentIdUrls.learnUrl} element={
          <Window icon={<HelpIcon />} page='INSTRUMENT ID: LEARN'>
            <Learn />
          </Window>}/>

        <Route path={instrumentIdUrls.learnFamilyUrl} element={
          <Window page='INSTRUMENT ID: LEARN'>
            <LearnFamilyPage />
          </Window>}/>

        <Route path={instrumentIdUrls.learnInstrumentUrl} element={
          <Window page='INSTRUMENT ID: LEARN'>
            <Instrument />
          </Window>}/>

        {/* Play */}
        <Route path={instrumentIdUrls.playUrl} element={
          <Window icon={<HelpIcon />} page='INSTRUMENT ID: PLAY'>
            <Play />
          </Window>} />

        <Route path={instrumentIdUrls.playListeningUrl} element={
          <Window cornerIcon={<HelpIcon />} page='INSTRUMENT ID: PLAY'>
            <ListeningSkills />
          </Window>} />

        <Route path={instrumentIdUrls.playListeningLevelUrl} element={
          <Window cornerIcon={<ReportCardIcon />} page='Listening Skills Test'>
            <ListeningSkillsTest />
          </Window>} />
        
        <Route path={instrumentIdUrls.playSongMakerUrl} element={
          <Window cornerIcon={<SavedSongsIcon />} page='Song Maker'>
            <SongMaker />
          </Window>
        } />
      
      {/* TOOLS */}
      {/* Score Keeper */}
      <Route path={urls.scoreKeeperUrl} element={
        <Window page='SCORE KEEPER'>
          <ScoreKeeper />
        </Window>} />
      
      {/* GENERAL 404 HANDLER */}
      <Route path="*" element={
        <Window small page="UH OH!">
          <NotFound />
        </Window>}/>
    </Routes>
  );
};

export default ArtBuddyRoutes;