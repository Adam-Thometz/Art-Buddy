import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { clearGame } from "../_redux/actions/sequenceMakerActions";

import Sequence from "./sequence/Sequence";
import Controls from "./controls/Controls";

import SoundOptions from "./sound-options/SoundOptions";

const SequenceMaker = () => {;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearGame());
    }
  }, [dispatch]);

  return (
    <div className="SequenceMaker">
      <p>HULLO IM SEQUENCE MAKER MAKE A SEQUENCE PLZ</p>
      <hr/>
      <Controls />
      <SoundOptions />
      <Sequence />
    </div>
  );
};

export default SequenceMaker;