import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { playMelody } from "../../actions";

import './WordPlayer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const WordPlayer = () => {
  const dispatch = useDispatch();
  const wordDisplay = useSelector(state => state.wordToMusic.wordDisplay);

  const play = () => {
    // debugger;
    for (let word of wordDisplay) {
      dispatch(playMelody(word))
    }
  }

  return (
    <div className="WordPlayer">
      <button onClick={play} className="WordPlayer-button">
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  );
};

export default WordPlayer;