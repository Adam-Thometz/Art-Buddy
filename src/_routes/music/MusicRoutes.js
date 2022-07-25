import React from "react";
import { Route, Routes } from "react-router-dom";

import Window from "_components/window/Window";
import WordToMusic from 'music-decoder/WordToMusic';
import SequenceMaker from 'sequence-maker/SequenceMaker';
import JumpIntoRhythm from "jump-into-rhythm/JumpIntoRhythm";
import InstrumentId from "instrument-id/InstrumentId";
import InstrumentIdRoutes from "./instrument-id/InstrumentIdRoutes";

import urls from "_data/_routes/routeUrls";
import getRoutes from "_helpers/_utils/getRoutes";

const MusicRoutes = () => {
  return (
    <Routes>
      <Route path={urls.wordToMusic} element={<Window><WordToMusic /></Window>} />
      <Route path={urls.sequenceMaker} element={<Window><SequenceMaker /></Window>} />
      <Route path={urls.jumpIntoRhythm} element={<Window><JumpIntoRhythm /></Window>} />
      <Route path={urls.instrumentId} element={<Window><InstrumentId /></Window>} />
      {getRoutes(InstrumentIdRoutes)}
    </Routes>
  );
};

export default MusicRoutes;