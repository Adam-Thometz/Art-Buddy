import React, { useEffect, useState } from 'react';
import SongMakerInfoContext from '_utils/instrument-id/SongMakerInfoContext';

import './SongMaker.css';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import SavedSongsIcon from './corner-icon/SavedSongsIcon';
import InstrumentDisplay from './instrument-display/InstrumentDisplay';

import { removeBuffers } from '_utils/instrument-id/buffers';
import { Transport } from 'tone';
import PlaySave from './play-save/PlaySave';

const SongMaker = () => {
  const [loop, setLoop] = useState({ isPlaying: false });
  const [currTimer, setCurrTimer] = useState(null);

  const stopInstruments = () => {
    if (loop.isPlaying) {
      loop.partsToPlay.forEach(part => part.stop());
      Transport.stop();
      setLoop({ isPlaying: false });
    };
  };

  useEffect(() => {
    if (loop.isPlaying) {
      Transport.start();
      loop.partsToPlay.forEach(part => part.start(0));
    } else {
      Transport.stop();
    }
  }, [loop]);

  useEffect(() => {
    return () => {
      stopInstruments();
      removeBuffers();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SongMakerInfoContext.Provider value={{ loop, setLoop, currTimer, setCurrTimer, stopInstruments }}>
      <WindowNavbar page='Song Maker' cornerIcon={<SavedSongsIcon />} />
      <section className='SongMaker-button-instrument-wrapper'>
        <PlaySave />
        <InstrumentDisplay />
      </section>
    </SongMakerInfoContext.Provider>
  );
};

export default SongMaker;