import React from "react";

import { playAllSequence, playSequence, resetSequence, addBlock, removeBlock } from "../../_redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

import './Sequence.css';

import SequenceBlock from "./SequenceBlock";
import Button from "../../_components/button/Button";

import colors from "../../_components/button/colorOrder";

const Sequence = () => {
  const sequence = useSelector(state => state.sequenceMaker.sequence);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addBlock());
  }
  
  const remove = () => {
    dispatch(removeBlock());
  }

  const handlePlay = () => {
    dispatch(playSequence())
  }
  
  const handlePlayAll = () => {
    dispatch(playAllSequence())
  }

  const handleReset = () => {
    dispatch(resetSequence());
  }
  
  return (
    <div className="Sequence">
      <div className="Sequence-header">
        <Button small borderColor={colors[2]} onClick={remove}>REMOVE BLOCK</Button>
        {sequence.some(block => block !== null) ? <p>CLICK ON A PICTURE TO HEAR THE SOUND.</p> : null}
        <Button small borderColor={colors[3]} onClick={add}>ADD BLOCK</Button>
      </div>
      <div className="Sequence-display">
        {sequence.map((block, i) => (
          <SequenceBlock block={block} borderColor={colors[i%4]} />
        ))}
      </div>
      <div className="Sequence-controls">
        <Button borderColor={colors[0]} onClick={handlePlayAll}>PLAY ALTOGETHER</Button>
        <Button borderColor={colors[1]} onClick={handlePlay}>PLAY ONE AT A TIME</Button>
        <Button borderColor={colors[2]} onClick={handleReset}>ERASE SEQUENCE</Button>
      </div>
    </div>
  );
};

export default Sequence;