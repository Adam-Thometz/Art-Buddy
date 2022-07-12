import React from 'react';

import './FrogLilyPads.css';

import Frog from './frog/Frog';
import LilyPadDisplay from './lily-pad-display/LilyPadDisplay';

const FrogLilyPad = () => {
  return (
    <div className='FrogLilyPads'>
      <Frog />
      <LilyPadDisplay />
    </div>
  )
}

export default FrogLilyPad