import React, { useContext, useEffect, useState } from 'react';
import useSavedSongs from '_hooks/useSavedSongs';
import SongMakerContext from '_utils/instrument-id/SongMakerInfoContext';

import './SavedSongs.css';

import Icon from '_components/icon/Icon';

import { smallPlayIcon, deleteIcon } from '_media/instrument-id/_icons/iconImports';
import { createBuffers } from '_utils/instrument-id/buffers';

const SavedSongs = () => {
  const { loop, playInstruments, stopInstruments } = useContext(SongMakerContext);
  const [savedSongs, setSavedSongs] = useSavedSongs();
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSelect = e => {
    const songName = e.target.innerText;
    setSelectedSong(songName);
    const song = savedSongs.get(songName);
    for (let instrument of song) {
      if (!instrument) continue;
      createBuffers(instrument.instrumentId);
    };
  };

  const handlePlay = () => {
    if (!selectedSong) return;
    const song = savedSongs.get(selectedSong);
    playInstruments(song);
  };

  const handleDelete = () => {
    if (!selectedSong) return;
    savedSongs.delete(selectedSong);
    setSavedSongs(savedSongs.entries());
  };

  useEffect(() => {
    return () => {
      if (loop.isPlaying) stopInstruments();
    }
  }, [loop.isPlaying, stopInstruments]);

  const songDisplay = Array.from(savedSongs.keys()).map(key => (
    <span className={`SavedSongs-title${key === selectedSong ? ' selected': ''}`} onClick={handleSelect}>{key}</span>
  ));

  return (
    <section className='SavedSongs'>
      <aside className='SavedSongs-options'>
        <Icon icon={smallPlayIcon} text='Play' size='49px' onClick={loop.isPlaying ? stopInstruments : handlePlay} />
        <Icon icon={deleteIcon} text='Delete' size='49px' onClick={handleDelete} />
      </aside>
      <section className='SavedSongs-song-list'>
        {songDisplay}
      </section>
    </section>
  );
};

export default SavedSongs;