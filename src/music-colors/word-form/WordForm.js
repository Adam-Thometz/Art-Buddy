import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createWord } from "../../actions";
import './WordForm.css'

const WordForm = () => {
  const dispatch = useDispatch();
  const [wordInput, setWordInput] = useState('');
  const [error, setError] = useState([]);

  const checkValidWord = wordInput => {
    const errors = [];
    if (wordInput.length > 45) errors.push('Word should be no longer than 45 characters');
    if (!wordInput.match(/^[A-Za-z]+$/)) errors.push('Only letters are allowed');

    return errors;
  };

  const handleChange = e => {
    setWordInput(e.target.value);
  };

  const handleSubmit = () => {
    const errors = checkValidWord(wordInput);
    if (errors.length) {
      setError(errors);
    } else {
      dispatch(createWord(wordInput));
      setWordInput('');
      if (error.length) setError([]);
    };
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
        <button className="WordForm-button" onClick={handleSubmit}>Generate word</button>
      </div>
      <div className="WordForm-error">
        {error.length ? <span>{error}</span> : null}
      </div>
    </div>
  );
};

export default WordForm;