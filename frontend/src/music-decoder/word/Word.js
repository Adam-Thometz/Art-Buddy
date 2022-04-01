import React, { useEffect, useState } from "react";

// import { useSelector } from "react-redux";

import './Word.css';

import WordPlayer from "./WordPlayer";

import synth from "../utils/synth";

const Word = ({ word, id }) => {
  const playNote = e => {
    const note = e.target.classList[2];
    if (!note) return;
    synth.triggerAttackRelease(`${note}4`, '4n');
  }

  if (!word.length) return null;

  const showPlayer = word.every(char => char.note !== null);
  
  return (
    <div className="Word">
      <p className="Word-prompt">{showPlayer ? 'Play your melody! Or click a letter to hear a note' : 'Find the letters in the chart above!'}</p>
      {word.map(char => (
        <div className={`Word-letter ${char.note ? `filled ${char.note}` : null}`} onClick={playNote}>
          {char.letter}
        </div>
      ))}
      {showPlayer ? <WordPlayer id={id} /> : null}
    </div>
  );
};

export default Word;