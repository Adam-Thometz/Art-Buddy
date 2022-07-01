import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

import './Instrument.css';

import Icon from "../../../_components/icon/Icon";
import Button from "../../../_components/button/Button";
import WindowNavbar from "../../../_components/window-nav/WindowNavbar";
import Help from "../../../_components/help/Help";

import learnInstrumentOptions from "../../learnInstrumentOptions";
import { createBuffers, removeBuffers } from "../../_utils/buffers";
import { playBeat, playScale } from "../../_utils/play";
import { useSelector } from "react-redux";

const Instrument = () => {
  const { volume } = useSelector(state => state.mainSettings);
  const { family, instrument } = useParams();
  const instrumentInfo = learnInstrumentOptions[family]
    .instruments
    .find(i => i.name === instrument.replace('-', ' ').toUpperCase());
    
  const handleCreateBuffers = () => createBuffers(instrumentInfo.id);

  const playInstrument = () => {
    const { sound, id, isRhythm } = instrumentInfo;
    isRhythm ? playBeat({ id, sound, volume }) : playScale({ id, volume });
  };

  useEffect(() => {
    return () => removeBuffers();
  }, []);

  const openVideo = () => window.open(instrumentInfo.videoUrl);

  return (
    <main className="Instrument" onLoad={handleCreateBuffers}>
      <WindowNavbar page='INSTRUMENT ID: LEARN' cornerIcon={<Help />} />
      <div className="Instrument-main">
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
      </div>
    </main>
  );
};

export default Instrument;