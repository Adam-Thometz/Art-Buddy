import React from 'react';

import './LilyPad.css';

import lilyPad from '_media/jump-into-rhythm/_icons/lily-pad.png';
import flower from '_media/jump-into-rhythm/_icons/lily-pad-flower.png';

const LilyPad = ({ beat }) => {
  return (
    <div className='LilyPad'>
      {beat ? (
        beat.duration.map(note => (<>
          <img
            className='LilyPad-pad'
            src={lilyPad}
            alt='Lily pad'
            style={{ width: note === '8n' || beat.isRest ? '45%' : '90%' }}
          />
          {beat.isRest ? <img className='LilyPad-flower' src={flower} alt='' /> : null}
        </>))
      ) : null}
    </div>
  );
};

export default LilyPad;