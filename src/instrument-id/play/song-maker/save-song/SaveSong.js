import React, { useState } from 'react';
import useLocalStorage from '../../../../_hooks/useLocalStorage';
import useFormFields from '../../../../_hooks/useFormFields';

import { useSelector } from 'react-redux';

import './SaveSong.css';

import Button from '../../../../_components/button/Button';
import Keyboard from '../../../../_components/keyboard/Keyboard';

const SaveSong = () => {
  const song = useSelector(state => state.instrumentId.song);
  const [savedSongs, setSavedSongs] = useLocalStorage('instrument-id-saved-songs');
  const [showMessage, setShowMessage] = useState(false);
  const [input, setInput, resetInput] = useFormFields({ title: '' });

  const handleSave = e => {
    const title = e.target.previousSibling.children[1].value;
    const newSavedSongs = new Map(JSON.parse(savedSongs));
    newSavedSongs.set(title, song);

    setSavedSongs(Array.from(newSavedSongs.entries()));
    setShowMessage(true);
    resetInput();

    const timer = setTimeout(() => {
      setShowMessage(false);
      clearTimeout(timer);
    }, 5000);
  };

  return (
    <form className='SaveSong'>
      <div className='SaveSong-control'>
        <label className='SaveSong-label'>Song Title</label>
        <input
          className='SaveSong-input'
          type='text'
          id='title'
          name='title'
          value={input.title}
          onChange={setInput}
        />
        <Keyboard />
      </div>
      <Button colorId={0} onClick={handleSave}>SAVE</Button>
      <span className={`SaveSong-message ${showMessage ? 'show' : 'hide'}`}>Song Saved!</span>
    </form>
  );
};

export default SaveSong;