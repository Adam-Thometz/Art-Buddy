import React, { useRef } from 'react';
import useSavedSongs from '_hooks/useSavedSongs';
import useFormFields from '_hooks/useFormFields';

import { useSelector } from 'react-redux';

import './SaveSong.css';

import Button from '_components/button/Button';
import Keyboard from '_components/keyboard/Keyboard';

const SaveSong = () => {
  const { song } = useSelector(state => state.instrumentId);
  const [savedSongs, setSavedSongs] = useSavedSongs();
  const [input, setInput, resetInput] = useFormFields({ title: '' });
  const inputRef = useRef();
  const savedRef = useRef();

  const handleSave = e => {
    e.preventDefault();
    const title = inputRef.current.value;
    const newSavedSongs = new Map(savedSongs.entries());
    newSavedSongs.set(title, song);

    setSavedSongs(newSavedSongs);
    savedRef.current.textContent = 'Song Saved!';
    resetInput();

    const timer = setTimeout(() => {
      savedRef.current.textContent = '';
      clearTimeout(timer);
    }, 5000);
  };

  return (
    <form className='SaveSong'>
      <section className='SaveSong-control'>
        <label className='SaveSong-label' htmlFor='title'>Song Title</label>
        <input
          className='SaveSong-input'
          ref={inputRef}
          type='text'
          id='title'
          name='title'
          value={input.title}
          onChange={setInput}
        />
        <Keyboard />
      </section>
      <Button colorId={0} onClick={handleSave}>SAVE</Button>
      <span ref={savedRef} className='SaveSong-message'></span>
    </form>
  );
};

export default SaveSong;