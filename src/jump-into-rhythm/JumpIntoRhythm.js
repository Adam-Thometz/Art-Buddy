import React from 'react'

import WindowNavbar from '_components/window-nav/WindowNavbar';
import FrogLilyPads from './frog-lily-pad/FrogLilyPads';
import NoteDisplay from './note-display/NoteDisplay';
import NoteOptions from './note-options/NoteOptions';

const JumpIntoRhythm = () => {
  return (
    <main className='JumpIntoRhythm'>
      <WindowNavbar page='JUMP INTO RHYTHM' />
      <FrogLilyPads />
      <NoteDisplay />
      <NoteOptions />
    </main>
  );
};

export default JumpIntoRhythm;