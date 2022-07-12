import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { fillLetter } from "_redux/music-decoder/musicDecoderActions";

import './AlphabetTable.css';

import LETTER_NOTES from '_helpers/music-decoder/letterNotes';
import play from "_helpers/music-decoder/play";

const AlphabetTable = () => {
  const {
    isUpperCase,
    currPlaying,
    filledLetters
  } = useSelector(state => state.musicDecoder);
  const dispatch = useDispatch();

  const displayLetters = isUpperCase ?
    Object.keys(LETTER_NOTES).slice(0, 26) :
    Object.keys(LETTER_NOTES).slice(26);

  const createCell = char => {
    let className = 'AlphabetTable-cell';
    if (filledLetters[char]) className += ` ${LETTER_NOTES[char]}`;
    if (char === currPlaying) className += ' playNote';

    return <td key={char} className={className} onClick={handleLetter}>{char}</td>;
  };
  
  const handleLetter = e => {
    const letter = e.target.textContent;
    const hasLetter = filledLetters[letter];
    if (!hasLetter) {
      dispatch(fillLetter(letter));
    } else {
      const note = LETTER_NOTES[letter];
      play(note);
    };
  };

  return (
    <table className="AlphabetTable">
      <tr>{displayLetters.slice(0, 13).map(char => createCell(char))}</tr>
      <tr>{displayLetters.slice(13).map(char => createCell(char))}</tr>
    </table>
  );
};

export default AlphabetTable;