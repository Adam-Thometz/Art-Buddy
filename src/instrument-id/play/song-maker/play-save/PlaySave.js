import React, { useContext, useEffect } from 'react';

import { useSelector } from 'react-redux';

import './PlaySave.css';

import Button from '_components/button/Button';
import Popup from '_components/popup/Popup';
import SaveSong from '../save-song/SaveSong';

import SongMakerInfoContext from '_utils/instrument-id/SongMakerInfoContext';
import createLoop from '_utils/instrument-id/createLoop';
import calculateTimeLeft from '_utils/instrument-id/calculateTimeLeft';
import { getBuffers } from '_utils/instrument-id/buffers';
import { Transport, start } from 'tone';

const PlaySave = () => {
  const { song } = useSelector(state => state.instrumentId);
  const { volume } = useSelector(state => state.mainSettings);
  const { loop, setLoop, currTimer, setCurrTimer, stopInstruments } = useContext(SongMakerInfoContext);

  const playInstruments = async () => {
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

  return (
    <div className='PlaySave'>
      <Button colorId={loop.isPlaying ? 2 : 0} onClick={loop.isPlaying ? stopInstruments : playInstruments}>
        {loop.isPlaying ? 'STOP' : 'PLAY'}
      </Button>
      <Popup
        title='SAVE SONG'
        trigger={<Button colorId={3}>SAVE</Button>}
        popup={<SaveSong />}
      />
    </div>
  )
}

export default PlaySave