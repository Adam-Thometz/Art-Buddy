import { Fragment } from 'react';

import './LilyPadDisplay.css';

import lilyPad from '_media/jump-into-rhythm/_icons/lily-pad.png';
import flower from '_media/jump-into-rhythm/_icons/lily-pad-flower.png';

const LilyPadDisplay = ({ measure, id }) => {
  return (
    <div className='LilyPadDisplay'>
      {measure.map((beat, i) => (
        <div key={`beat${i}`} className='LilyPadDisplay-lily-pad'>
          {beat ? (
            beat.duration.map(note => (<Fragment key={`beat${i}-${id}`}>
              <img
                className='LilyPadDisplay-pad'
                src={lilyPad}
                alt='Lily pad'
                style={{ width: note === '8n' || beat.isRest ? '45%' : '90%' }}
              />
              {beat.isRest ? <img className='LilyPadDisplay-flower' src={flower} alt='' /> : null}
            </Fragment>))
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default LilyPadDisplay;