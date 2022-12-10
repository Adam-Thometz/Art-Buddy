import React, { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import './Frog.css';

import createHoppingAnimation from '_utils/jump-into-rhythm/createHoppingAnimation';

const Frog = ({ frog, measure, delay = 0 }) => {
  const { isAnimating } = useSelector(state => state.jumpIntoRhythm);
  const frogRef = useRef(null);

  useEffect(() => {
    if (isAnimating) {
      const ids = measure.map(note => note.id);
      const { animation, duration } = createHoppingAnimation(ids);
      setTimeout(() => {
        frogRef.current.animate(animation, duration);
      }, delay*1000 + 250);
      // the 250 accounts for a slight lag between the sound and animation
    }
  }, [isAnimating, measure, delay]);

  return <img ref={frogRef} className='Frog' src={frog} alt='frog' />;
};

export default Frog;