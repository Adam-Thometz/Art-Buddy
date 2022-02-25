import React from "react";
import AlphabetCell from "./AlphabetCell";
import { rows, notes } from '../utils/musicAlphabetData'
import './AlphabetTable.css'
import { useDispatch } from "react-redux";
import { fillLetter } from "../../actions";

const AlphabetTable = () => {
  const dispatch = useDispatch()
  const colorLetter = e => {
    const letter = e.target.innerText;
    const note = e.target.classList[1];
    dispatch(fillLetter(letter, note));
  }
  return (
    <table className="AlphabetTable">
      <tbody onClick={colorLetter}>
        {rows.map(row => (
          <tr>
            {row.map((char, i) => (
              <AlphabetCell letter={char} note={notes[i]} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlphabetTable;