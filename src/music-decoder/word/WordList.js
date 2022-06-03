import React from "react";

import { useSelector } from "react-redux";

import './WordList.css';

import Word from "./Word";

const WordList = () => {
  const words = useSelector(state => state.wordToMusic.words);
  if (words.every(word => word.length === 0)) return null;
  return (
    <section className="WordList">
      {words.map((word, id) => (
        <Word word={word} id={id} />
      ))}
    </section>
  );
};

export default WordList;