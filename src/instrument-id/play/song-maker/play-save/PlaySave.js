import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleLoop } from '_redux/instrument-id/song-maker/songMakerActions';

import './PlaySave.css';

import Button from '_components/button/Button';
import Popup from '_components/popup/Popup';
import SaveSong from '../save-song/SaveSong';

const PlaySave = () => {
  const { song, isPlaying } = useSelector(state => state.songMaker);
  const dispatch = useDispatch();

  const handleToggle = () => {
    if (song.some(part => part || !!part.melodyId)) dispatch(toggleLoop());
  };

  return (
    <div className='PlaySave'>
      <Button colorId={isPlaying ? 2 : 0} onClick={handleToggle}>
        {isPlaying ? 'STOP' : 'PLAY'}
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