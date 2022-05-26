import React, { useState } from 'react';
import useLocalStorage from '../../../../_hooks/useLocalStorage';

import { useSelector } from 'react-redux';

import './SaveSong.css';

import Button from '../../../../_components/button/Button';
import Input from '../../../../_components/input/Input';

const SaveSong = () => {
  const song = useSelector(state => state.instrumentId.song);
  const [savedSongs, setSavedSongs] = useLocalStorage('instrument-id-saved-songs');
  const [showMessage, setShowMessage] = useState(false);

  const handleSave = e => {
    const title = e.target.previousSibling.children[1].value;
    const newSavedSongs = new Map(JSON.parse(savedSongs));
    newSavedSongs.set(title, song);
    setSavedSongs(Array.from(newSavedSongs.entries()));
    setShowMessage(true);
    const timer = setTimeout(() => {
      setShowMessage(false);
      clearTimeout(timer);
    }, 5000)
  };

  return (
    <section className='SaveSong'>
      <Input id='title' label='Song Title' />
      <Button colorId={0} onClick={handleSave}>SAVE</Button>
      <span className={`SaveSong-message ${showMessage ? 'show' : 'hide'}`}>Song Saved!</span>
    </section>
  );
};

export default SaveSong;