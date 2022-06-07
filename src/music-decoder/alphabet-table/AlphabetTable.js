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
    const hasLetter = filledLetters.includes(letter);
    if (!hasLetter) {
      dispatch(fillLetter(letter));
    } else {
      const note = LETTER_NOTES[letter];
      play(note);
    };
  };

  const fillCell = char => {
    const hasLetter = filledLetters.includes(char);
    if (hasLetter) {
      return ` ${LETTER_NOTES[char]}`;
    } else {
      return '';
    };
  };

  const displayLetters = isUpperCase ?
    Object.keys(LETTER_NOTES).slice(0, 26) :
    Object.keys(LETTER_NOTES).slice(26);

  return (
    <table className="AlphabetTable">
      <tr>
        {displayLetters.slice(0, 13).map((char) => (
          <td key={char} className={`AlphabetTable-cell${fillCell(char)}`} onClick={handleLetter}>{char}</td>
        ))}
      </tr>
      <tr>
        {displayLetters.slice(13).map((char) => (
          <td key={char} className={`AlphabetTable-cell${fillCell(char)}`} onClick={handleLetter}>{char}</td>
        ))}
      </tr>
    </table>
  );
};

export default AlphabetTable;