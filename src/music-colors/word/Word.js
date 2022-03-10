import React from "react";
import './Word.css'
import WordPlayer from "./WordPlayer";
import { useSelector } from "react-redux";

const Word = () => {
  const wordDisplay = useSelector(store => store.musicColors.wordDisplay);
  const showPlayer = useSelector(store => store.musicColors.showPlayer);
  return (
    <div className="Word">
      <p className="Word-prompt">{showPlayer ? 'Play your melody!' : 'Find the letters in the chart above!'}</p>
      {wordDisplay.map(char => (
        <div className={`Word-letter ${char.note}`}>
          {char.letter}
        </div>
      ))}
      {showPlayer ? <WordPlayer /> : null}
    </div>
  );
};

export default Word;