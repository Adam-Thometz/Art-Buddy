import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { playMelody } from "../../_redux/actions/actions";

import './WordPlayer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const WordPlayer = ({ id }) => {
  const word = useSelector(state => state.wordToMusic.wordDisplay)[id];
  const dispatch = useDispatch()

  const play = () => {
    dispatch(playMelody(word))
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