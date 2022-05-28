import React from "react";

import play from "../_utils/play";

import './Word.css';

const Word = ({ word, id }) => {
  const handlePlayNote = e => {
    const note = e.target.classList[2];
    if (!note) return;
    play(note);
  };

  if (!word.length) return null;

  return (
    <div className="Word">
      {word.map(char => (
        <div className={`Word-letter ${char.note ? `filled ${char.note}` : null}`} onClick={handlePlayNote}>
          {char.letter}
        </div>
      ))}
    </div>
  );
};

export default Word;