import React from "react";

import { useSelector } from "react-redux";

import './Sequence.css';

import SequenceBlock from "./sequence-block/SequenceBlock";

import colors from "_helpers/_utils/colorOrder";

const Sequence = () => {
  const { sequence } = useSelector(state => state.sequenceMaker);

  return (
    <section className="Sequence">
      {sequence.map((block, i) => (
        <SequenceBlock key={i} id={i} block={block} borderColor={colors[i%4]} />
      ))}
    </section>
  );
};

export default Sequence;