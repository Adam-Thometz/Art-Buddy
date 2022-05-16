import React from "react";
import { useParams } from 'react-router-dom';

import { useDispatch } from "react-redux";

import './Instrument.css';

import Icon from "../../../_components/icon/Icon";
import Button from "../../../_components/button/Button";

import learnInstrumentOptions from "../../learnInstrumentOptions";
import { playSound } from "../../../_redux/actions/insturmentIdActions";
import { Buffer } from "tone";

const Instrument = () => {
  const dispatch = useDispatch()
  const { family, instrument } = useParams();
  const instrumentInfo = learnInstrumentOptions[family]
    .instruments
    .find(i => i.name === instrument.replace('-', ' ').toUpperCase());
  
  const playInstrument = () => {
    dispatch(playSound(instrumentInfo.sound));
  }

  const openVideo = () => {
    window.open(instrumentInfo.videoUrl);
  }

  const createBuffers = () => {
    const { sound } = instrumentInfo
    if (typeof sound === 'object') {
      const percussiveHits = Object.keys(sound);
      for (let i = 0; i < percussiveHits.length; i++) {
        window[`buffer${i+1}`] = new Buffer(sound[percussiveHits[i]])
      }
    } else {
      window.buffer = new Buffer(sound);
    }
  }

  return (
    <div className="Instrument" onLoad={createBuffers}>
      <div className="Instrument-name">
        <Icon icon={instrumentInfo.icon} text={instrumentInfo.name} />
      </div>
      <div className="Instrument-information">
        <h2>WHAT IS THE {instrumentInfo.name} MADE OUT OF?</h2>
        <ul>
          {instrumentInfo.madeFrom.map(material => (
            <li>{material}</li>
          ))}
        </ul>
        <h2>THE {instrumentInfo.name} IS PLAYED BY...</h2>
        <p>{instrumentInfo.howToPlay}</p>
        <div className="Instrument-buttons">
          <Button colorId={0} onClick={playInstrument}>Play Sound</Button>
          <Button colorId={2} onClick={openVideo}>Watch Video</Button>
        </div>
      </div>
    </div>
  );
};

export default Instrument;