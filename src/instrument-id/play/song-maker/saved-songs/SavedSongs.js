import React, { useState } from 'react';
import useLocalStorage from '_hooks/useLocalStorage';

import { useSelector } from 'react-redux';

import './SavedSongs.css';

import Icon from '_components/icon/Icon';

import { smallPlayIcon, deleteIcon } from '_media/instrument-id/_icons/iconImports';
import { createBuffers, getBuffers } from '_helpers/instrument-id/buffers';
import { play } from '_helpers/instrument-id/play';

const SavedSongs = () => {
  const { volume } = useSelector(state => state.mainSettings);
  const [savedSongs, setSavedSongs] = useLocalStorage('instrument-id-saved-songs');
  const [selectedSong, setSelectedSong] = useState(null);
  const songs = new Map(JSON.parse(savedSongs));

  const handleSelect = e => {
    const songName = e.target.innerText;
    setSelectedSong(songName);
    const song = songs.get(songName);
    for (let instrument of song) {
      if (!instrument) continue;
      createBuffers(instrument.instrumentId);
    };
  };

  const handlePlay = () => {
    const song = songs.get(selectedSong);
    for (let instrument of song) {
      if (!instrument) continue;

      const { instrumentId, melodyId, isRhythm } = instrument;
      if (!melodyId) continue;
      
      const { buffers } = getBuffers(instrumentId);
      play({ melodyId, volume, buffers, isRhythm });
    };
  };

  const handleDelete = () => {
    if (!selectedSong) return;
    songs.delete(selectedSong);
    setSavedSongs(JSON.stringify(Array.from(songs.entries())));
  };

  const songDisplay = Array.from(songs.keys()).map((key) => (
    <span className={`SavedSongs-title${key === selectedSong ? ' selected': ''}`} onClick={handleSelect}>{key}</span>
  ));

  return (
    <section className='SavedSongs'>
      <aside className='SavedSongs-options'>
        <Icon icon={smallPlayIcon} text='Play' size='49px' onClick={handlePlay} />
        <Icon icon={deleteIcon} text='Delete' size='49px' onClick={handleDelete} />
      </aside>
      <section className='SavedSongs-song-list'>
        {songDisplay}
      </section>
    </section>
  );
};

export default SavedSongs;