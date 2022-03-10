import React from "react";
import { useSelector } from "react-redux";
import SequenceBlock from "./SequenceBlock";
import './Sequence.css'

const Sequence = () => {
  const sequence = useSelector(state => state.sequenceMaker.sequence)
  return (
    <div className="Sequence">
      {sequence.map(block => (
        <SequenceBlock block={block} />
      ))}
    </div>
  );
};

export default Sequence;