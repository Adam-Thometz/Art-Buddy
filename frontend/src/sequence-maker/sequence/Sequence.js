import React from "react";

import { useSelector, useDispatch } from "react-redux";

import './Sequence.css';

import SequenceBlock from "./SequenceBlock";
import Button from "../../_components/button/Button";

import colors from "../../_components/button/colorOrder";
import { resetSequence } from "../../_redux/actions/actions";

const Sequence = () => {
  const sequence = useSelector(state => state.sequenceMaker.sequence);
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(resetSequence());
  }
  
  return (
    <div className="Sequence">
      {sequence.some(block => block !== null) ? <p>Click on a picture to hear the sound!</p> : null}
      <div className="Sequence-display">
        {sequence.map(block => (
          <SequenceBlock block={block} />
        ))}
      </div>
      <Button outlineColor={colors[3]} onClick={handleReset}>RESET</Button>
    </div>
  );
};

export default Sequence;