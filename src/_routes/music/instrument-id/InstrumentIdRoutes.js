import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";

import LearnInstrumentId from "views/instrument-id/learn/LearnInstrumentId";
import LearnFamilyPage from "views/instrument-id/learn/family/LearnFamilyPage";
import Instrument from "views/instrument-id/learn/instrument/Instrument";
import PlayInstrumentId from "views/instrument-id/play/PlayInstrumentId";
import ListeningSkills from "views/instrument-id/play/listening-skills/ListeningSkills";
import ListeningSkillsTest from "views/instrument-id/play/listening-skills/level/ListeningSkillsTest";
import SongMaker from "views/instrument-id/play/song-maker/SongMaker";

import { instrumentIdUrls } from "_routes/routeUrls";

const InstrumentIdRoutes = () => {
  return (
    <Routes>
      {/* Learn */}
      <Route path={instrumentIdUrls.learn}element={<Window><LearnInstrumentId /></Window>} />
      <Route path={instrumentIdUrls.learnFamily}element={<Window><LearnFamilyPage /></Window>} />
      <Route path={instrumentIdUrls.learnInstrument}element={<Window><Instrument /></Window>} />
      {/* Play */}
      <Route path={instrumentIdUrls.play}element={<Window><PlayInstrumentId /></Window>} />
      <Route path={instrumentIdUrls.playListening}element={<Window><ListeningSkills /></Window>} />
      <Route path={instrumentIdUrls.playListeningLevel}element={<Window><ListeningSkillsTest /></Window>} />
      <Route path={instrumentIdUrls.playSongMaker}element={<Window><SongMaker /></Window>} />
    </Routes>
  );
};

export default InstrumentIdRoutes;
