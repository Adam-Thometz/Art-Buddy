import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import WordToMusicDecoder from './music-colors/WordToMusicDecoder';
import SequenceMaker from './sequence-maker/SequenceMaker';
import FreezeDance from './freeze-dance/FreezeDance';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/decoder" element={<WordToMusicDecoder />} />
      <Route path="/sequencer" element={<SequenceMaker />} />
      <Route path="/freeze-dance" element={<FreezeDance />} />
    </Routes>
  );
};

export default AppRoutes