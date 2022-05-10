import React from "react";
import { useSelector } from "react-redux";
import Word from "./Word";

const WordList = () => {
  const wordDisplay = useSelector(state => state.wordToMusic.wordDisplay);
  if (wordDisplay.every(word => word.word.length === 0)) return null;
  return (
    <div className="WordList">
      {wordDisplay.map((word, id) => (
        <Word word={word.word} id={id} />
      ))}
    </div>
  );
};

export default WordList;