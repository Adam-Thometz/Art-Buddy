import React, { useContext, useEffect } from 'react';
import { PopupContext } from '_context/PopupContext';

import { useSelector, useDispatch } from 'react-redux';
import { toggleLoop } from '_redux/instrument-id/song-maker/songMakerActions';

import './PlaySave.css';

import Button from '_components/button/Button';
import SaveSong from '../save-song/SaveSong';

const PlaySave = () => {
  const { song, isPlaying } = useSelector(state => state.songMaker);
  const { setCurrPopup } = useContext(PopupContext);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => setCurrPopup(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = () => {
    if (song.some(part => part || !!part.melodyId)) dispatch(toggleLoop());
  };

  const openSavePopup = () => setCurrPopup({
    title: 'SAVE SONG',
    popup: <SaveSong />
  });

  return (
    <div className='PlaySave'>
      <Button colorId={isPlaying ? 2 : 0} onClick={handleToggle}>
        {isPlaying ? 'STOP' : 'PLAY'}
      </Button>
      <Button colorId={3} onClick={openSavePopup} >SAVE</Button>
    </div>
  );
};

export default PlaySave;