import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { fillLetter } from "../../_redux/actions/wordToMusicActions";

import './AlphabetTable.css';

import { LETTER_NOTES } from '../_utils/letterNotes';
import play from "../_utils/play";

const AlphabetTable = () => {
  const isUpperCase = useSelector(state => state.wordToMusic.isUpperCase);
  const currPlaying = useSelector(state => state.wordToMusic.currPlaying);
  const filledLetters = useSelector(state => state.wordToMusic.filledLetters);
  const dispatch = useDispatch();

  const displayLetters = isUpperCase ?
    Object.keys(LETTER_NOTES).slice(0, 26) :
    Object.keys(LETTER_NOTES).slice(26);

  const createCell = char => {
    let className = 'AlphabetTable-cell';
    if (filledLetters.includes(char)) className += ` ${LETTER_NOTES[char]}`;
    if (char === currPlaying) className += ' playNote';

    return (
      <td 
        key={char}
        className={className}
        onClick={handleLetter}
      >{char}</td>
    );
  };
  
  const handleLetter = e => {
    const letter = e.target.textContent;
    const hasLetter = filledLetters.includes(letter);
    if (!hasLetter) {
      dispatch(fillLetter(letter));
    } else {
      const note = LETTER_NOTES[letter];
      play(note);
    };
  };

  return (
    <table className="AlphabetTable">
      <tr>
        {displayLetters.slice(0, 13).map(char => createCell(char))}
      </tr>
      <tr>
        {displayLetters.slice(13).map(char => createCell(char))}
      </tr>
    </table>
  );
};

export default AlphabetTable;