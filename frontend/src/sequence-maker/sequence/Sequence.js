import React from "react";

import { useSelector } from "react-redux";

import './Sequence.css';

import SequenceBlock from "./SequenceBlock";

const Sequence = () => {
  const sequence = useSelector(state => state.sequenceMaker.sequence)
  return (
    <div className="Sequence">
      <div className="Sequence-display">
        {sequence.map(block => (
          <SequenceBlock block={block} />
        ))}
      </div>
      {sequence.some(block => block !== null) ? "Click on a picture to hear the sound!" : null}
    </div>
  );
};

export default Sequence;