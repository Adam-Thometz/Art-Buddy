import { Route, Routes } from "react-router-dom";

import Window from "components/window/Window";
import WordToMusic from "views/music-decoder/WordToMusic";
import SequenceMaker from "views/sequence-maker/SequenceMaker";
import JumpIntoRhythm from "views/jump-into-rhythm/JumpIntoRhythm";
import InstrumentId from "views/instrument-id/InstrumentId";
import InstrumentIdRoutes from "./instrument-id/InstrumentIdRoutes";

import urls from "routes/routeUrls";
import getRoutes from "utils/_general/getRoutes";

const MusicRoutes = () => {
  return (
    <Routes>
      <Route path={urls.wordToMusicUrl} element={<Window><WordToMusic /></Window>} />
      <Route path={urls.sequenceMakerUrl} element={<Window><SequenceMaker /></Window>} />
      <Route path={urls.jumpIntoRhythmUrl} element={<Window><JumpIntoRhythm /></Window>} />
      <Route path={urls.instrumentIdUrl} element={<Window><InstrumentId /></Window>} />
      {getRoutes(InstrumentIdRoutes)}
    </Routes>
  );
};

export default MusicRoutes;
