import React from "react";
import useFormFields from "../../_hooks/useFormFields";

import { useDispatch, useSelector } from "react-redux";
import { createWords } from "../../_redux/actions/wordToMusicActions";

import './WordForm.css';

const WordForm = () => {
  const error = useSelector(state => state.wordToMusic.formError);
  const [input, handleChange] = useFormFields({ words: '' });
  const dispatch = useDispatch();

  const updateWord = e => {
    const { name, value } = e.target;
    handleChange({ name, value });
    dispatch(createWords(value));
  };

  return (
    <form className="WordForm">
      <label className="WordForm-label" htmlFor="words">WORDS</label>
      <span className="WordForm-error">{error}</span>
      <input
        className="WordForm-input"
        type="text"
        id="words"
        name="words"
        value={input.words}
        onChange={updateWord}
      />
    </form>
  );
};

export default WordForm;