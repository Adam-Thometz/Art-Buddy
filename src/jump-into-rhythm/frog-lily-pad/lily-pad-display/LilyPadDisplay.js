import React from 'react';

import './LilyPadDisplay.css';

import lilyPad from '_media/jump-into-rhythm/_icons/lily-pad.png';
import flower from '_media/jump-into-rhythm/_icons/lily-pad-flower.png';

const LilyPadDisplay = ({ measure }) => {
  return (
    <div className='LilyPadDisplay'>
      {measure.map(beat => (
        <div className='LilyPadDisplay-lily-pad'>
          {beat ? (
            beat.duration.map(note => (<>
              <img
                className='LilyPadDisplay-pad'
                src={lilyPad}
                alt='Lily pad'
                style={{ width: note === '8n' || beat.isRest ? '45%' : '90%' }}
              />
              {beat.isRest ? <img className='LilyPadDisplay-flower' src={flower} alt='' /> : null}
            </>))
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default LilyPadDisplay;