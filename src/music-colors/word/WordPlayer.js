import React from "react";

import { useSelector } from "react-redux";

import './WordPlayer.css';

import synth from "../utils/synth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { now } from 'tone';

const WordPlayer = () => {
  const wordDisplay = useSelector(state => state.musicColors.wordDisplay);

  const playMelody = () => {
    const start = now();
    for (let i = 0; i < wordDisplay.length; i++) {
      const { letter, note } = wordDisplay[i]
      const seconds = i * 0.5;
      if (letter === ' ') {
        
      } else {
        synth.triggerAttackRelease(`${note}4`, "8n", start + seconds);
      }
    }
  }

  return (
    <div className="WordPlayer">
      <button onClick={playMelody} className="WordPlayer-button">
        <FontAwesomeIcon icon={faPlay} />
      </button>
    </div>
  );
};

export default WordPlayer;