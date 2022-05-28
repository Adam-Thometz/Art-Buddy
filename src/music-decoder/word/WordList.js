import React from "react";

import { useSelector } from "react-redux";

import './WordList.css';

import Word from "./Word";

const WordList = () => {
  const wordDisplay = useSelector(state => state.wordToMusic.wordDisplay);
  if (wordDisplay.every(word => word.length === 0)) return null;
  return (
    <section className="WordList">
      {wordDisplay.map((word, id) => (
        <Word word={word} id={id} />
      ))}
    </section>
  );
};

export default WordList;