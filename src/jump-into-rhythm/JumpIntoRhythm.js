import React from 'react'

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Help from '_components/help/Help';

const JumpIntoRhythm = () => {
  return (
    <main className='JumpIntoRhythm'>
      <WindowNavbar page='JUMP INTO RHYTHM' cornerIcon={<Help />} />
      <header>
        <p>HULLO IM JUMP INTO RHYTHM. MAKE SOME RHYTHMS TO MAKE THE FROGGY JUMP PLZ</p>
      </header>
    </main>
  );
};

export default JumpIntoRhythm;