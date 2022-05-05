import React from "react";

import { useDispatch } from "react-redux";
import { playNote } from "../../_redux/actions/wordToMusicActions";

import './Word.css';

import WordPlayer from "./WordPlayer";

const Word = ({ word, id }) => {
  const dispatch = useDispatch();

  const handlePlayNote = e => {
    const note = e.target.classList[2];
    if (!note) return;
    dispatch(playNote(note));
  }

  if (!word.length) return null;

  const showPlayer = word.every(char => char.note !== null);
  
  return (
    <div className="Word">
      <p className="Word-prompt">{showPlayer ? 'Play your melody! Or click a letter to hear a note' : 'Find the letters in the chart above!'}</p>
      {word.map(char => (
        <div className={`Word-letter ${char.note ? `filled ${char.note}` : null}`} onClick={handlePlayNote}>
          {char.letter}
        </div>
      ))}
      {showPlayer ? <WordPlayer id={id} /> : null}
    </div>
  );
};

export default Word;