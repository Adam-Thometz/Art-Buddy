import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { clearGame } from "_redux/sequence-maker/sequenceMakerActions";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import SequenceControls from "./controls/SequenceControls";
import SoundOptions from "./sound-options/SoundOptions";
import Sequence from "./sequence/Sequence";

import { Transport } from "tone";
import SequencePlayReset from "./play-reset/SequencePlayReset";

const SequenceMaker = () => {;
  const dispatch = useDispatch();

  // set tempo to 240 bpm to make duration easier to work with
  const setTempo = () => Transport.bpm.value = 240;

  useEffect(() => {
    return () => {
      dispatch(clearGame());
      // set tempo back to normal when finished with game
      Transport.bpm.value = 120;
    };
  }, [dispatch]);

  return (
    <main className="SequenceMaker" onLoad={setTempo}>
      <WindowNavbar page='SEQUENCE MAKER' />
      <SequenceControls />
      <SoundOptions />
      <Sequence />
      <SequencePlayReset />
    </main>
  );
};

export default SequenceMaker;