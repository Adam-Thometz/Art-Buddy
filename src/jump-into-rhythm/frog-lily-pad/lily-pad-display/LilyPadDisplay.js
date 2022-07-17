import React from 'react';

import { useSelector } from 'react-redux';

import './LilyPadDisplay.css';

import LilyPad from './lily-pad/LilyPad';

const LilyPadDisplay = () => {
  const { rhythm } = useSelector(state => state.jumpIntoRhythm);
  return (
    <div className='LilyPadDisplay'>
      {rhythm.map(beat => <LilyPad beat={beat} />)}
    </div>
  );
};

export default LilyPadDisplay;