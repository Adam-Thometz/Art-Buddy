import React, { useContext, useEffect } from 'react';
import SongMakerInfoContext from '_utils/instrument-id/SongMakerInfoContext';

import { useSelector } from 'react-redux';

import './PlaySave.css';

import Button from '_components/button/Button';
import Popup from '_components/popup/Popup';
import SaveSong from '../save-song/SaveSong';

import calculateTimeLeft from '_utils/instrument-id/calculateTimeLeft';

const PlaySave = () => {
  const { song } = useSelector(state => state.songMaker);
  const {
    loop,
    currTimer,
    setCurrTimer,
    playInstruments,
    stopInstruments
  } = useContext(SongMakerInfoContext);

  const handlePlay = () => playInstruments(song);

  useEffect(() => {
    if (!loop.isPlaying) return;
    if (currTimer) clearTimeout(currTimer);
    const duration = calculateTimeLeft(loop.partsToPlay);
    const timer = setTimeout(() => {
      stopInstruments();
      playInstruments(song);
      clearTimeout(timer);
      setCurrTimer(null);
    }, duration);
    setCurrTimer(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song]);

  return (
    <div className='PlaySave'>
      <Button colorId={loop.isPlaying ? 2 : 0} onClick={loop.isPlaying ? stopInstruments : handlePlay}>
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