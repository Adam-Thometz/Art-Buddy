import React from "react";

import Music from "./Music";
import ScoreKeeper from './score-keeper/ScoreKeeper'

const FreezeDance = () => { 
  return (
    <div className="FreezeDance">
      <Music />
      <ScoreKeeper />
    </div>
  );
};

export default FreezeDance;