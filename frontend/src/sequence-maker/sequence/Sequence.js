import React from "react";

import { useSelector } from "react-redux";

import './Sequence.css';

import SequenceBlock from "./SequenceBlock";

const Sequence = () => {
  const sequence = useSelector(state => state.sequenceMaker.sequence)
  return (
    <div className="Sequence">
      {sequence.some(block => block !== null) ? <p>Click on a picture to hear the sound!</p> : null}
      <div className="Sequence-display">
        {sequence.map(block => (
          <SequenceBlock block={block} />
        ))}
      </div>
    </div>
  );
};

export default Sequence;