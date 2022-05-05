import React from "react";

import { playAllSequence, playSequence, resetSequence, addBlock, removeBlock } from "../../_redux/actions/sequenceMakerActions";
import { useSelector, useDispatch } from "react-redux";

import './Sequence.css';

import SequenceBlock from "./SequenceBlock";
import Button from "../../_components/button/Button";

import colors from "../../_components/button/colorOrder";

const Sequence = () => {
  const sequence = useSelector(state => state.sequenceMaker.sequence);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addBlock());
  }
  
  const handleRemove = () => {
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
        <Button small colorId={2} onClick={handleRemove}>REMOVE BLOCK</Button>
        {sequence.some(block => block !== null) ? <p>CLICK ON A PICTURE TO HEAR THE SOUND.</p> : null}
        <Button small colorId={3} onClick={handleAdd}>ADD BLOCK</Button>
      </div>
      <div className="Sequence-display">
        {sequence.map((block, i) => (
          <SequenceBlock block={block} borderColor={colors[i%4]} />
        ))}
      </div>
      <div className="Sequence-controls">
        <Button colorId={0} onClick={handlePlayAll}>PLAY TOGETHER</Button>
        <Button colorId={1} onClick={handlePlay}>PLAY ONE AT A TIME</Button>
        <Button colorId={2} onClick={handleReset}>RESET SEQUENCE</Button>
      </div>
    </div>
  );
};

export default Sequence;