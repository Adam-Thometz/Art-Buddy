import React from 'react';

import './FrogLilyPads.css';

import Frog from './frog/Frog';
import LilyPadDisplay from './lily-pad-display/LilyPadDisplay';

const FrogLilyPad = () => {
  return (
    <section className='FrogLilyPads'>
      <Frog />
      <LilyPadDisplay />
    </section>
  )
}

export default FrogLilyPad