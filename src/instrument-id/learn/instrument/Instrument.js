import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

import './Instrument.css';

import Icon from "../../../_components/icon/Icon";
import Button from "../../../_components/button/Button";

import learnInstrumentOptions from "../../learnInstrumentOptions";
import { createBuffers, removeBuffers } from "../../_utils/buffers";
import { isRhythmicInstrument } from "../../_utils/getInstrument";
import { playBeat, playScale } from "../../_utils/play";

const Instrument = () => {
  const { family, instrument } = useParams();
  const instrumentInfo = learnInstrumentOptions[family]
    .instruments
    .find(i => i.name === instrument.replace('-', ' ').toUpperCase());
  
  const playInstrument = () => {
    const { sound, id } = instrumentInfo;
    isRhythmicInstrument(instrumentInfo) ?
      playBeat({id, sound}) :
      playScale({id});
  }

  useEffect(() => {
    return () => removeBuffers();
  }, []);

  const openVideo = () => {
    window.open(instrumentInfo.videoUrl);
  };

  const handleCreateBuffers = () => {
    createBuffers(instrumentInfo.id);
  };

  return (
    <main className="Instrument" onLoad={handleCreateBuffers}>
      <header className="Instrument-name">
        <Icon largeFont icon={instrumentInfo.icon} text={instrumentInfo.name} />
      </header>
      <article className="Instrument-information">
        <h2>WHAT IS THE {instrumentInfo.name} MADE OUT OF?</h2>
        <ul>
          {instrumentInfo.madeFrom.map(material => (
            <li key={material}>{material}</li>
          ))}
        </ul>
        <h2>THE {instrumentInfo.name} IS PLAYED BY...</h2>
        <p>{instrumentInfo.howToPlay}</p>
        <section className="Instrument-buttons">
          <Button colorId={0} onClick={playInstrument}>Play Sound</Button>
          <Button colorId={2} onClick={openVideo}>Watch Video</Button>
        </section>
      </article>
    </main>
  );
};

export default Instrument;