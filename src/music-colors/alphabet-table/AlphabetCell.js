import React from "react";
import './AlphabetCell.css'

const AlphabetCell = ({ letter, note }) => {
  return <td className={`AlphabetCell ${note}`}>{letter}</td>;
};

export default AlphabetCell;