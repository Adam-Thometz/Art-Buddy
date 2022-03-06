import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createWord } from "../../actions";
import './WordForm.css'

const WordForm = () => {
  const dispatch = useDispatch();
  const [wordInput, setWordInput] = useState('');
  const [error, setError] = useState([]);

  const checkValidWord = wordInput => {
    if (!wordInput) {
      dispatch(createWord(''));
      return;
    };
    const errors = [];
    if (wordInput.length > 12) errors.push('Word should be no longer than 12 characters');
    if (!wordInput.match(/^[A-Za-z]+$/)) errors.push('Only letters are allowed!');

    return errors;
  };

  const handleChange = e => {
    const input = e.target.value;
    setWordInput(input);
    const errors = checkValidWord(input);
    if (errors.length) {
      setError(errors);
    } else {
      dispatch(createWord(input));
      if (error.length) setError([])
    }

  };

  return (
    <div className="WordForm">
      <div className="WordForm-form-group">
        <label className="WordForm-label" htmlFor="word">Type a word to turn into a melody</label>
        <input
          className="WordForm-input"
          name="word"
          id="word"
          value={wordInput}
          onChange={handleChange}
        />
      </div>
      <div className="WordForm-error">
        {error.length ? <span>{error}</span> : null}
      </div>
    </div>
  );
};

export default WordForm;