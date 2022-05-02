import React from "react";
import { useParams } from 'react-router-dom';

import './Instrument.css';

import Icon from "../../../_components/icon/Icon";

import learnInstrumentOptions from "../learnInstrumentOptions";
import Button from "../../../_components/button/Button";
import { now } from 'tone';

const Instrument = () => {
  const { family, instrument } = useParams();

  const instrumentInfo = learnInstrumentOptions[family]
    .instruments
    .find(i => i.name === instrument.replace('-', ' '));
  
  const playInstrument = () => {
    const start = now();
    instrumentInfo.sound.triggerAttackRelease('C3', '3m', start)
  }
  return (
    <div className="Instrument">
      <div className="Instrument-name">
        <Icon icon={instrumentInfo.icon} text={instrumentInfo.name.toUpperCase()} />
      </div>
      <div className="Instrument-information">
        <p>{instrumentInfo.description}</p>
        <div className="Instrument-buttons">
          <Button colorId={0} onClick={playInstrument}>Play Sound</Button>
          <Button colorId={2}>Watch Video</Button>
        </div>
      </div>
    </div>
  );
};

export default Instrument;