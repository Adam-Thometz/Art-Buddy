import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import synth from "../utils/synth";
import { now } from 'tone'
import { useSelector } from "react-redux";

const WordPlayer = () => {
  const wordDisplay = useSelector(state => state.musicColors.wordDisplay)
  const [playLoop, setPlayLoop] = useState(false)

  const toggleLoop = () => {
    setPlayLoop(loop => !loop)
  }

  const playMelody = () => {
    const start = now();
    for (let i = 0; i < wordDisplay.length; i++) {
      const note = wordDisplay[i].note;
      const seconds = i * 0.5;
      synth.triggerAttackRelease(`${note}4`, "8n", start + seconds);
    }
  }

  return (
    <div className="WordPlayer">
      <button onClick={playMelody} className="WordPlayer-button"><FontAwesomeIcon icon={faPlay} /></button>
      <button onClick={toggleLoop} className={`WordPlayer-button ${playLoop ? 'on' : 'off'}`}><FontAwesomeIcon icon={faArrowRotateRight} /></button>
    </div>
  );
};

export default WordPlayer;