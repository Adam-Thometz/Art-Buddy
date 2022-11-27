import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import './SongMaker.css';

import Button from '_components/button/Button';
import Popup from '_components/popup/Popup';
import WindowNavbar from '_components/window-nav/WindowNavbar';
import SavedSongsIcon from './corner-icon/SavedSongsIcon';
import SaveSong from './save-song/SaveSong';
import InstrumentDisplay from './instrument-display/InstrumentDisplay';

import { play } from '_utils/instrument-id/play';
import { getBuffers, removeBuffers } from '_utils/instrument-id/buffers';

const SongMaker = () => {
  const { song } = useSelector(state => state.instrumentId);
  const { volume } = useSelector(state => state.mainSettings);

  const playInstruments = () => {
    for (let i = 0; i < song.length; i++) {
      const instrument = song[i];
      if (!instrument) continue;
      
      const { instrumentId, melodyId, isRhythm } = instrument;
      if (!melodyId) continue;

      const { buffers } = getBuffers(instrumentId);
      play({ melodyId, volume, buffers, isRhythm });
    };
  };

  useEffect(() => {
    return () => removeBuffers();
  }, []);

  const savePopup = (
    <Popup
      title='SAVE SONG'
      trigger={<Button colorId={3}>SAVE</Button>}
      popup={<SaveSong />}
    />
  );

  return (
    <>
      <WindowNavbar page='Song Maker' cornerIcon={<SavedSongsIcon />} />
      <section className='SongMaker-button-instrument-wrapper'>
        <div className='SongMaker-buttons'>
          <Button colorId={0} onClick={playInstruments}>PLAY</Button>
          {savePopup}
        </div>
        <InstrumentDisplay />
      </section>
    </>
  );
};

export default SongMaker;