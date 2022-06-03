import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { fillLetter } from "../../_redux/actions/wordToMusicActions";

import './AlphabetTable.css';

import { LETTER_NOTES } from '../_utils/letterNotes';
import play from "../_utils/play";

const AlphabetTable = () => {
  const isUpperCase = useSelector(state => state.wordToMusic.isUpperCase);
  const filledLetters = useSelector(state => state.wordToMusic.filledLetters);
  const dispatch = useDispatch();
  
  const handleLetter = e => {
    const letter = e.target.innerText;
    const note = LETTER_NOTES[letter];
    const haveLetter = filledLetters.includes(letter);
    if (!haveLetter) {
      dispatch(fillLetter(letter));
    } else {
      play(note);
    };
  };

  const fillCell = (char) => {
    const hasLetter = filledLetters.includes(char);
    if (hasLetter) {
      return ` ${LETTER_NOTES[char]}`;
    } else {
      return '';
    };
  };

  const displayLetters = Object.keys(LETTER_NOTES).filter(char => (
    isUpperCase ? char === char.toUpperCase() : char === char.toLowerCase()
  ));

  return (
    <section className="AlphabetTable" onClick={handleLetter}>
      {displayLetters.map((char) => (
        <div className={`AlphabetTable-cell${fillCell(char)}`}>{char}</div>
      ))}
    </section>
  );
};


export default AlphabetTable;