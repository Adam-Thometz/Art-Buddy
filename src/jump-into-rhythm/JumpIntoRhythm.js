import React from 'react'

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Help from '_components/help/Help';
import FrogLilyPads from './frog-lily-pad/FrogLilyPads';
import NoteDisplay from './note-display/NoteDisplay';

const JumpIntoRhythm = () => {
  return (
    <main className='JumpIntoRhythm'>
      <WindowNavbar page='JUMP INTO RHYTHM' cornerIcon={<Help />} />
      <header>
        <p>HULLO IM JUMP INTO RHYTHM. MAKE SOME RHYTHMS TO MAKE THE FROGGY JUMP PLZ</p>
      </header>
      <FrogLilyPads />
      <NoteDisplay />
    </main>
  );
};

export default JumpIntoRhythm;