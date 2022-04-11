import React from "react";

import { useDispatch } from "react-redux";
import { removeFromSequence } from "../../actions";

import './SequenceBlock.css';

const SequenceBlock = ({block}) => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeFromSequence(block.id));
  }
  const play = () => {
    if (block.alt !== 'stop') block.sound.triggerAttackRelease('C2', 4);
  }

  return (
    <div className="SequenceBlock">
      {block !== null ? (
        <>
          <img className="SequenceBlock-img" src={block.image} alt={block.alt} onClick={play} />
          <button className="SequenceBlock-delete" onClick={remove}>X</button>
        </>
      ) : null}
    </div>
  );
};

export default SequenceBlock;