import React, { useEffect, useState } from 'react';
import SongMakerInfoContext from '_utils/instrument-id/SongMakerInfoContext';

import { useSelector } from 'react-redux';

import './SongMaker.css';

import Button from '_components/button/Button';
import Popup from '_components/popup/Popup';
import WindowNavbar from '_components/window-nav/WindowNavbar';
import SavedSongsIcon from './corner-icon/SavedSongsIcon';
import SaveSong from './save-song/SaveSong';
import InstrumentDisplay from './instrument-display/InstrumentDisplay';

import createLoop from '_utils/instrument-id/createLoop';
import calculateTimeLeft from '_utils/instrument-id/calculateTimeLeft';
import { getBuffers, removeBuffers } from '_utils/instrument-id/buffers';
import { Transport, start } from 'tone';

const SongMaker = () => {
  const { song } = useSelector(state => state.instrumentId);
  const { volume } = useSelector(state => state.mainSettings);
  const [loop, setLoop] = useState({ isPlaying: false });
  const [currTimer, setCurrTimer] = useState(null)

  const playInstruments = async () => {
    if (Transport.state === 'stopped') await start();
    const partsToPlay = [];
    for (let i = 0; i < song.length; i++) {
      const instrument = song[i];
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
    if (!loop.isPlaying) return;
    if (currTimer) clearTimeout(currTimer);
    const duration = calculateTimeLeft(loop.partsToPlay);
    const timer = setTimeout(() => {
      stopInstruments();
      playInstruments();
      clearTimeout(timer);
      setCurrTimer(null);
    }, duration);
    setCurrTimer(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song]);

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

  const savePopup = (
    <Popup
      title='SAVE SONG'
      trigger={<Button colorId={3}>SAVE</Button>}
      popup={<SaveSong />}
    />
  );

  return (
    <SongMakerInfoContext.Provider value={{ loop, setLoop, stopInstruments }}>
      <WindowNavbar page='Song Maker' cornerIcon={<SavedSongsIcon />} />
      <section className='SongMaker-button-instrument-wrapper'>
          <div className='SongMaker-buttons'>
            <Button colorId={loop.isPlaying ? 2 : 0} onClick={loop.isPlaying ? stopInstruments : playInstruments}>
              {loop.isPlaying ? 'STOP' : 'PLAY'}
            </Button>
            {savePopup}
          </div>
        <InstrumentDisplay />
      </section>
    </SongMakerInfoContext.Provider>
  );
};

export default SongMaker;