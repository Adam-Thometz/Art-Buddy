import React, { useContext } from "react";
import PlayContext from "_utils/_general/PlayContext";

import { useSelector, useDispatch } from "react-redux";
import { fillLetter } from "_redux/music-decoder/musicDecoderActions";

import './AlphabetTable.css';

import LETTER_NOTES from '_data/music-decoder/letterNotes';

const AlphabetTable = () => {
  const { playFn } = useContext(PlayContext)
  const {
    isUpperCase,
    currPlaying,
    filledLetters
  } = useSelector(state => state.musicDecoder);
  const dispatch = useDispatch();

  const displayLetters = isUpperCase
    ? Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65))
    : Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97));

  const createCell = char => {
    let className = 'AlphabetTable-cell';
    if (filledLetters[char]) className += ` ${LETTER_NOTES[char]}`;
    if (char === currPlaying) className += ' playNote';

    return <td key={char} className={className} onClick={handleLetter}>{char}</td>;
  };
  
  const handleLetter = e => {
    const letter = e.target.textContent;
    const hasLetter = filledLetters[letter];
    if (hasLetter) {
      playFn(LETTER_NOTES[letter]);
    } else {
      dispatch(fillLetter({ letter, play: playFn }));
    };
  };

  return (
    <table className="AlphabetTable">
      <tbody>
        <tr>{displayLetters.slice(0, 13).map(char => createCell(char))}</tr>
        <tr>{displayLetters.slice(13).map(char => createCell(char))}</tr>
      </tbody>
    </table>
  );
};

export default AlphabetTable;