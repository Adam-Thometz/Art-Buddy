import React from 'react';

import './LilyPad.css';

import lilyPad from '_media/jump-into-rhythm/_icons/lily-pad.png';

const LilyPad = ({ beat }) => {
  return (
    <div className='LilyPad'>
      {beat ? (
        <>
          {beat.duration.map(note => (
            <img src={lilyPad} alt='A lily pad' />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default LilyPad;