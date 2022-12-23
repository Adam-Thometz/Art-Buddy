import React, { useEffect, useState } from 'react';
import SongMakerInfoContext from '_utils/instrument-id/SongMakerInfoContext';

import { useSelector } from 'react-redux';

import './SongMaker.css';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import SavedSongsIcon from './corner-icon/SavedSongsIcon';
import PlaySave from './play-save/PlaySave';
import InstrumentDisplay from './instrument-display/InstrumentDisplay';

import { removeBuffers, getBuffers } from '_utils/instrument-id/buffers';
import { Transport, start } from 'tone';
import createLoop from '_utils/instrument-id/createLoop';

const SongMaker = () => {
  const { volume } = useSelector(state => state.mainSettings);
  const [loop, setLoop] = useState({ isPlaying: false });
  const [currTimer, setCurrTimer] = useState(null);

  const playInstruments = async (song) => {
    if (Transport.state === 'stopped') await start();
    const partsToPlay = [];
    for (let instrument of song) {
      if (!instrument) continue;
      
      const { instrumentId, melodyId, isRhythm } = instrument;
      if (!melodyId) continue;

      const { buffers } = getBuffers(instrumentId);
      const part = createLoop({ melodyId, volume, buffers, isRhythm });
      partsToPlay.push(part);
    };
    setLoop({ isPlaying: true, partsToPlay });
  };

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
    <SongMakerInfoContext.Provider value={{
      loop,
      setLoop,
      currTimer,
      setCurrTimer,
      playInstruments,
      stopInstruments
    }}>
      <WindowNavbar page='Song Maker' cornerIcon={<SavedSongsIcon />} />
      <section className='SongMaker-button-instrument-wrapper'>
        <PlaySave />
        <InstrumentDisplay />
      </section>
    </SongMakerInfoContext.Provider>
  );
};

export default SongMaker;