import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import './SongMaker.css';

import Button from '_components/button/Button';
import Popup from '_components/popup/Popup';
import WindowNavbar from '_components/window-nav/WindowNavbar';
import SavedSongsIcon from './corner-icon/SavedSongsIcon';
import SaveSong from './save-song/SaveSong';
import InstrumentDisplay from './instrument-display/InstrumentDisplay';

import createLoop from '_utils/instrument-id/createLoop';
import { getBuffers, removeBuffers } from '_utils/instrument-id/buffers';
import { Transport, start } from 'tone';
import SongMakerInfoContext from '_utils/instrument-id/SongMakerInfoContext';

const SongMaker = () => {
  const { song } = useSelector(state => state.instrumentId);
  const { volume } = useSelector(state => state.mainSettings);
  const [loop, setLoop] = useState(null);

  const playInstruments = async () => {
    if (Transport.state === 'stopped') await start();
    const partsToPlay = []
    for (let i = 0; i < song.length; i++) {
      const instrument = song[i];
      if (!instrument) continue;
      
      const { instrumentId, melodyId, isRhythm } = instrument;
      if (!melodyId) continue;

      const { buffers } = getBuffers(instrumentId);
      const part = createLoop({ melodyId, volume, buffers, isRhythm });
      partsToPlay.push(part);
    };
    setLoop(partsToPlay);
    Transport.start();
    partsToPlay.forEach(part => part.start(0));
  };

  const stopInstruments = () => {
    if (loop) loop.forEach(part => part.stop());
    Transport.stop();
    setLoop(null);
  }

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
            <Button colorId={loop ? 2 : 0} onClick={loop ? stopInstruments : playInstruments}>
              {loop ? 'STOP' : 'PLAY'}
            </Button>
            {savePopup}
          </div>
        <InstrumentDisplay />
      </section>
    </SongMakerInfoContext.Provider>
  );
};

export default SongMaker;