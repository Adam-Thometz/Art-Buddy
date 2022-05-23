import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { clearGame } from "../_redux/actions/sequenceMakerActions";

import Sequence from "./sequence/Sequence";
import Controls from "./controls/Controls";

import SoundOptions from "./sound-options/SoundOptions";
import { Transport } from "tone";

const SequenceMaker = () => {;
  const dispatch = useDispatch();

  const setTempo = () => Transport.bpm.value = 240;

  useEffect(() => {
    return () => {
      dispatch(clearGame());
      Transport.bpm.value = 120;
    }
  }, [dispatch]);

  return (
    <div className="SequenceMaker" onLoad={setTempo}>
      <p>HULLO IM SEQUENCE MAKER MAKE A SEQUENCE PLZ</p>
      <hr/>
      <Controls />
      <SoundOptions />
      <Sequence />
    </div>
  );
};

export default SequenceMaker;