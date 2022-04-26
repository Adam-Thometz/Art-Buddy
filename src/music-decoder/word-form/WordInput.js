import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { createWord } from "../../_redux/actions/actions";

import './WordInput.css';

const WordInput = ({ id }) => {
  const dispatch = useDispatch();
  const [wordInput, setWordInput] = useState('');
  const [error, setError] = useState([]);

  const checkValidWord = wordInput => {
    const errors = [];
    if (wordInput.length > 12) errors.push('Word should be no longer than 12 characters');
    if (!wordInput.match(/^[A-Za-z]+$/)) errors.push('Only letters are allowed!');

    return errors;
  };

  const handleChange = e => {
    const input = e.target.value;
    setWordInput(input);
    if (!input) {
      dispatch(createWord('', id));
      return;
    }
    const errors = checkValidWord(input);
    if (errors.length) {
      setError(errors);
    } else {
      dispatch(createWord(input, id));
      if (error.length) setError([]);
    }
  };

  return (
    <div className="WordInput">
      <input
        className="WordInput-input"
        name="word"
        id="word"
        value={wordInput}
        onChange={handleChange}
      />
      <div className="WordInput-error">
        {error.length ? <span>{error}</span> : null}
      </div>
    </div>
  );
};

export default WordInput;