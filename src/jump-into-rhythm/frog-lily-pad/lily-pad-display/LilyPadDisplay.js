import React from 'react';

import './LilyPadDisplay.css';

import LilyPad from './lily-pad/LilyPad';

const LilyPadDisplay = ({ measure }) => {
  return (
    <div className='LilyPadDisplay'>
      {measure.map(beat => <LilyPad beat={beat} />)}
    </div>
  );
};

export default LilyPadDisplay;