import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { clearGame } from "../_redux/actions/sequenceMakerActions";

import Sequence from "./sequence/Sequence";
import SequenceControls from "./controls/SequenceControls";

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
    <main className="SequenceMaker" onLoad={setTempo}>
      <header>
        <p>HULLO IM SEQUENCE MAKER MAKE A SEQUENCE PLZ</p>
      </header>
      <hr/>
      <SequenceControls />
      <SoundOptions />
      <Sequence />
    </main>
  );
};

export default SequenceMaker;