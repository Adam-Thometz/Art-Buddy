import React from "react";

import { useDispatch } from "react-redux";
import { removeFromSequence } from "../../actions";

import './SequenceBlock.css';

const SequenceBlock = ({block}) => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeFromSequence(block.id));
  }

  return (
    <div className="SequenceBlock">
      {block !== null ? (
        <div>
          <img className="SequenceBlock-img" src={block.image} alt={block.alt} />
          <button className="SequenceBlock-delete" onClick={remove}>X</button>
        </div>
      ) : null}
    </div>
  );
};

export default SequenceBlock;