import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addWord } from "../../_redux/actions/actions";

import './WordForm.css';

import WordInput from "./WordInput";

const WordForm = () => {
  const wordDisplay = useSelector(state => state.wordToMusic.wordDisplay);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addWord());
  }

  return (
    <div className="WordForm">
      <div className="WordForm-form-group">
        <label className="WordForm-label" htmlFor="word">Type words to turn into a melody</label>
        {wordDisplay.map((word, id) => (
          <WordInput word={word} id={id} />
        ))}
        <button className="WordForm-button" onClick={add}>+</button>
      </div>
    </div>
  );
};

export default WordForm;