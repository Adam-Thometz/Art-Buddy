import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { PlayContext } from "_utils/_general/PlayContext";

import { useSelector } from "react-redux";

import './Instrument.css';

import Icon from "_components/icon/Icon";
import Button from "_components/button/Button";
import WindowNavbar from "_components/window-nav/WindowNavbar";

import loadSounds from "_utils/instrument-id/loadSounds";
import getInstrument from "_utils/instrument-id/getInstrument";
import convertToId from "_utils/_general/convertToId";
import { Transport, start } from "tone";

const Instrument = () => {
  const { volume } = useSelector(state => state.mainSettings);
  const { instrument } = useParams();
  const { playFn, setPlayFn } = useContext(PlayContext);
  const {
    id,
    name,
    icon,
    madeFrom,
    howToPlay,
    width,
    videoUrl
  } = getInstrument(convertToId(instrument.replace(/-/g, ' ')));

  const playInstrument = async () => {
    if (Transport.state === 'stopped') await start();
    playFn(id);
  };

  useEffect(() => {
    setPlayFn(() => loadSounds({ ids: [id], volume, isTest: false }).play);
    return () => Transport.stop();
  }, [id, volume]);

  const openVideo = () => window.open(videoUrl);

  return (<>
    <WindowNavbar page='INSTRUMENT ID: LEARN' />
    <div className="Instrument-main">
      <header className="Instrument-name">
        <Icon largeFont icon={icon} text={name} width={width} />
      </header>
      <article className="Instrument-information">
        <h2>What is the {name.toLowerCase()} made of?</h2>
        <section className="Instrument-materials">
          {madeFrom.map(material => (
            <Icon icon={material.icon} text={material.name} size='100px' />
          ))}
        </section>
        <p className="Instrument-made-of">The {name} is played by {howToPlay}</p>
        <section className="Instrument-buttons">
          <Button colorId={0} onClick={playInstrument}>Play Sound</Button>
          <Button colorId={2} onClick={openVideo}>Watch Video</Button>
        </section>
      </article>
    </div>
  </>);
};

export default Instrument;