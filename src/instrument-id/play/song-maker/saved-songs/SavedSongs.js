import React, { useContext, useState } from 'react';
import useSavedSongs from '_hooks/useSavedSongs';
import SongMakerContext from '_utils/instrument-id/SongMakerInfoContext';

import { useSelector } from 'react-redux';

import './SavedSongs.css';

import Icon from '_components/icon/Icon';

import { smallPlayIcon, deleteIcon } from '_media/instrument-id/_icons/iconImports';
import { createBuffers, getBuffers } from '_utils/instrument-id/buffers';
import createLoop from '_utils/instrument-id/createLoop';
import { Transport, start } from 'tone';

const SavedSongs = () => {
  const { volume } = useSelector(state => state.mainSettings);
  const { loop, setLoop, stopInstruments } = useContext(SongMakerContext)
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

  const handlePlay = async () => {
    if (!selectedSong) return;
    if (Transport.state === 'stopped') await start();
    const partsToPlay = []
    const song = savedSongs.get(selectedSong);
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

  const handleDelete = () => {
    if (!selectedSong) return;
    savedSongs.delete(selectedSong);
    setSavedSongs(savedSongs.entries());
  };

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