import React from "react";
import './SequenceBlock.css'

const SequenceBlock = ({block}) => {
  return (
    <div className="SequenceBlock">
      {block !== null ? (
        <img src={block.image} alt="" />
      ) : null}
    </div>
  );
};

export default SequenceBlock;