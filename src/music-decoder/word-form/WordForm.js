import { useRef } from "react";
import useFormFields from "_hooks/form-fields/useFormFields";

import { useDispatch } from "react-redux";
import { createWords } from "_redux/music-decoder/musicDecoderActions";

import './WordForm.css';

import hasValidWords from "_utils/music-decoder/hasValidWords";

const WordForm = () => {
  const [input, setInput] = useFormFields({ words: '' });
  const dispatch = useDispatch();
  const errorRef = useRef(null);

  const updateWord = e => {
    setInput(e);
    const input = e.target.value.trim();
    const check = hasValidWords(input);
    if (check.success) {
      dispatch(createWords(input));
      errorRef.current.textContent = '';
    } else {
      errorRef.current.textContent = check.error;
    };
  };

  return (
    <form className="WordForm">
      <label className="WordForm-label" htmlFor="words">WORDS</label>
      <span className="WordForm-error" ref={errorRef}></span>
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