import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addWord } from "../../_redux/actions/actions";

import './WordForm.css';

import WordInput from "./WordInput";
import Button from "../../_components/button/Button";

import colors from '../../_components/button/colorOrder'

const WordForm = () => {
  const wordDisplay = useSelector(state => state.wordToMusic.wordDisplay);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addWord());
  }

  return (
    <div className="WordForm">
      <div className="WordForm-form-group">
        <label className="WordForm-label" htmlFor="word">TYPE WORDS HERE</label>
        {wordDisplay.map((word, id) => (
          <WordInput word={word} id={id} />
        ))}
        <Button small borderColor={colors[0]} onClick={add}>ADD WORD</Button>
      </div>
    </div>
  );
};

export default WordForm;