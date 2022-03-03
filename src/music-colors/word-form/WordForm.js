import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createWord } from "../../actions";
import './WordForm.css'

const WordForm = () => {
  const dispatch = useDispatch()
  const [wordInput, setWordInput] = useState('');
  const [error, setError] = useState([])

  const checkValidWord = wordInput => {
    const resObject = { errors: [] }
    if (wordInput.length > 45) resObject.errors.push('Word should be no longer than 45 characters');
    if (!wordInput.match(/^[A-Za-z]+$/)) resObject.errors.push('Only letters are allowed')

    resObject.errors.length ? resObject.isValid = false : resObject.isValid = true;
    return resObject;
  }

  const handleChange = e => {
    setWordInput(e.target.value);
  };

  const handleSubmit = () => {
    const check = checkValidWord(wordInput);
    if (!check.isValid) {
      setError(check.errors);
    } else {
      dispatch(createWord(wordInput))
      setWordInput('');
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
        <button className="WordForm-button" onClick={handleSubmit}>Generate word</button>
      </div>
      <div className="WordForm-error">
        {error.length ? <span>{error}</span> : null}
      </div>
    </div>
  )
}

export default WordForm