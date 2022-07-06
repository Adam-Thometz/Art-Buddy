import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeScale, changeSound, toggleNote } from '_redux/music-decoder/wordToMusicActions';

import './DecoderControls.css';

import Dropdown from '_components/dropdown/Dropdown';
import Button from '_components/button/Button';

import scales from './dropdown-options/scales';
import instruments from './dropdown-options/instruments';
import play from '_helpers/music-decoder/play';
import createSound from '_helpers/music-decoder/createSound';
import convertLettersToNotes from '_helpers/music-decoder/convertLettersToNotes';

const DecoderControls = () => {
  const {
    words,
    scale,
    sound,
    currPlaying,
    filledLetters
  } = useSelector(state => state.wordToMusic);
  const { volume } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch();
  
  const handleChangeScale = e => {
    const newScale = +e.target.id;
    createSound({ volume, scale: newScale, sampleId: sound });
    dispatch(changeScale(newScale));
  };

  const handleChangeSound = e => {
    const newSound = e.target.id === 'synth' ? null : e.target.id;
    createSound({ volume, scale, sampleId: newSound });
    dispatch(changeSound(newSound));
  };

  const handlePlayMelody = () => {
    if (currPlaying) return;
    
    const { notesToPlay, lettersToToggle } = convertLettersToNotes(words, filledLetters);

    for (let i = 0; i < lettersToToggle.length; i++) {
      const letter = lettersToToggle[i];
      if (!letter) continue;
      const start = setTimeout(() => {
        dispatch(toggleNote(letter));
        clearTimeout(start);
      }, (500 * i));
    };
    
    const end = setTimeout(() => {
      dispatch(toggleNote(null));
      clearTimeout(end);
    }, 500 * lettersToToggle.length);
    
    play(notesToPlay, scale);
  };
  
  return (
    <section className='DecoderControls'>
      <aside className='DecoderControls-dropdowns'>
        <Dropdown
          labelText='SCALE'
          onClick={handleChangeScale}
          options={scales}
        />
        <Dropdown
          labelText='SOUND'
          onClick={handleChangeSound}
          options={instruments}
        />
      </aside>
      <aside className='DecoderControls-play'>
        <Button small colorId={0} onClick={handlePlayMelody} otherStyles={{width: '10vw', padding: '3%'}}>PLAY</Button>
      </aside>
    </section>
  );
};

export default DecoderControls;