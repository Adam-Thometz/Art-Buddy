import { useContext } from "react";
import { PlayContext } from "context/PlayContext";

import { useSelector, useDispatch } from "react-redux";
import { fillLetter } from "store/music-decoder/musicDecoderReducer";

import "./AlphabetTable.css";

import LETTER_NOTES from "data/music-decoder/letterNotes";
import searchLetter from "utils/music-decoder/searchLetter";

const AlphabetTable = () => {
  const { playFn } = useContext(PlayContext);
  const {
    isUpperCase,
    currPlaying,
    filledLetters,
    words
  } = useSelector((state) => state.musicDecoder);
  const dispatch = useDispatch();

  const displayLetters = isUpperCase
    ? Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65))
    : Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97));

  const createCell = (char) => {
    let className = "AlphabetTable-cell";
    if (filledLetters[char]) className += ` ${LETTER_NOTES[char]}`;
    if (char === currPlaying) className += " playNote";

    return (
      <td key={char} className={className} onClick={handleLetter}>
        {char}
      </td>
    );
  };

  const handleLetter = (e) => {
    const letter = e.target.textContent;
    if (filledLetters[letter]) {
      playFn(LETTER_NOTES[letter]);
    } else {
      const hasLetter = searchLetter(words, letter);
      if (hasLetter) {
        dispatch(fillLetter(letter));
        playFn(LETTER_NOTES[letter]);
      }
    }
  };

  return (
    <table className="AlphabetTable">
      <tbody>
        <tr>{displayLetters.slice(0, 13).map((char) => createCell(char))}</tr>
        <tr>{displayLetters.slice(13).map((char) => createCell(char))}</tr>
      </tbody>
    </table>
  );
};

export default AlphabetTable;
