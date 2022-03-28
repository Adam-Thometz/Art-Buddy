import React from "react";

import { useSelector } from "react-redux";

import './WordPlayer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import synth from "../utils/synth";
import { now } from "tone";

const WordPlayer = () => {
  const wordDisplay = useSelector(state => state.wordToMusic.wordDisplay);

  const play = () => {
    // debugger;
    const start = now();
    for (let i = 0; i < wordDisplay.length; i++) {
      const { note } = wordDisplay[i];
      const seconds = i * 0.5;
      synth.triggerAttackRelease(`${note}4`, "8n", start + seconds);
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