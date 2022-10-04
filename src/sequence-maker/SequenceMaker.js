import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { clearGame } from "_redux/sequence-maker/sequenceMakerActions";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import SequenceControls from "./controls/SequenceControls";
import SoundOptions from "./sound-options/SoundOptions";
import Sequence from "./sequence/Sequence";
import SequencePlayReset from "./play-reset/SequencePlayReset";

const SequenceMaker = () => {;
  const dispatch = useDispatch();

  
  useEffect(() => {
    return () => dispatch(clearGame());
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page='SEQUENCE MAKER' />
      <SequenceControls />
      <SoundOptions />
      <Sequence />
      <SequencePlayReset />
    </>
  );
};

export default SequenceMaker;