import React, { useState } from 'react';
import useLocalStorage from '../../../../_hooks/useLocalStorage';

import './SavedSongs.css';

import Icon from '../../../../_components/icon/Icon';

import { smallPlayIcon, deleteIcon } from '../../../_icons/iconImports';

const SavedSongs = () => {
  const [savedSongs] = useLocalStorage('instrument-id-saved-songs');
  const [selectedSong, setSelectedSong] = useState(null);
  const songs = new Map(JSON.parse(savedSongs));

  const handleSelect = e => {
    setSelectedSong(e.target.innerText);
  }

  const songDisplay = Array.from(songs.keys()).map((key) => (
    <span className={`SavedSongs-title${key === selectedSong ? ' selected': ''}`} onClick={handleSelect}>{key}</span>
  ));

  return (
    <div className='SavedSongs'>
      <div className='SavedSongs-options'>
        <Icon icon={smallPlayIcon} text='Play' size='49px' />
        <Icon icon={deleteIcon} text='Delete' size='49px' />
      </div>
      <div className='SavedSongs-song-list'>
        {songDisplay}
      </div>
    </div>
  );
};

export default SavedSongs;