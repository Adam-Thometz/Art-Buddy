import React from "react";
import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";

import Learn from "instrument-id/learn/learn-main/Learn";
import LearnFamilyPage from "instrument-id/learn/family/LearnFamilyPage";
import Instrument from "instrument-id/learn/instrument/Instrument";
import Play from 'instrument-id/play/Play';
import ListeningSkills from "instrument-id/play/listening-skills/ListeningSkills";
import ListeningSkillsTest from "instrument-id/play/listening-skills/level/ListeningSkillsTest";
import SongMaker from "instrument-id/play/song-maker/SongMaker";

import { instrumentIdUrls } from "_routes/routeUrls";

const InstrumentIdRoutes = () => {
  return (
    <Routes>
      {/* Learn */}
      <Route path={instrumentIdUrls.learn} element={<Window><Learn /></Window>}/>
      <Route path={instrumentIdUrls.learnFamily} element={<Window><LearnFamilyPage /></Window>}/>
      <Route path={instrumentIdUrls.learnInstrument} element={<Window><Instrument /></Window>}/>
      {/* Play */}
      <Route path={instrumentIdUrls.play} element={<Window><Play /></Window>} />
      <Route path={instrumentIdUrls.playListening} element={<Window><ListeningSkills /></Window>} />
      <Route path={instrumentIdUrls.playListeningLevel} element={<Window><ListeningSkillsTest /></Window>} />
      <Route path={instrumentIdUrls.playSongMaker} element={<Window><SongMaker /></Window>} />
    </Routes>
  );
};

export default InstrumentIdRoutes;