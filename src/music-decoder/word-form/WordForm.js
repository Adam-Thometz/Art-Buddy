import React from "react";
import useFormFields from "_hooks/useFormFields";

import { useDispatch, useSelector } from "react-redux";
import { createWords } from "_redux/music-decoder/musicDecoderActions";

import './WordForm.css';

const WordForm = () => {
  const { formError } = useSelector(state => state.musicDecoder);
  const [input, setInput] = useFormFields({ words: '' });
  const dispatch = useDispatch();

  const updateWord = e => {
    setInput(e);
    const { value } = e.target;
    dispatch(createWords(value));
  };

  return (
    <form className="WordForm">
      <label className="WordForm-label" htmlFor="words">WORDS</label>
      <span className="WordForm-error">{formError}</span>
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