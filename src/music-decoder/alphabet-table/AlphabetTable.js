import React from "react";

import { useDispatch } from "react-redux";
import { fillLetter } from "../../_redux/actions/wordToMusicActions";

import './AlphabetTable.css';

import { LETTERS, NOTES } from '../_utils/musicAlphabetData';
import AlphabetCell from "./AlphabetCell";

const AlphabetTable = () => {
  const dispatch = useDispatch();
  
  const colorLetter = e => {
    const letter = e.target.innerText;
    const note = e.target.classList[1];
    dispatch(fillLetter({letter, note}));
    
  }
  
  return (
    <section className="AlphabetTable" onClick={colorLetter}>
      {LETTERS.map((char, i) => (
        <AlphabetCell letter={char} note={NOTES[i%NOTES.length]} />
      ))}
    </section>
  );
};

export default AlphabetTable;