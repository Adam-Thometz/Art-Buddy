import React from 'react';

import './LilyPad.css';

import lilyPad from '_media/jump-into-rhythm/_icons/lily-pad.png';

const LilyPad = ({ beat }) => {
  return (
    <div className='LilyPad'>
      {beat ? (
        beat.duration.map(note => (
          <img src={lilyPad} alt='A lily pad' style={{ width: note === '8n' ? '45%' : '90%' }} />
        ))
      ) : null}
    </div>
  );
};

export default LilyPad;