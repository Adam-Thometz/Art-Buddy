import React from "react";

import './AlphabetCell.css';

const AlphabetCell = ({ letter, note }) => {
  return <div className={`AlphabetCell ${note}`}>{letter}</div>;
};

export default AlphabetCell;