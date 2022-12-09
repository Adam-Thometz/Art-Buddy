import React, { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import './Frog.css';

import createAnimation from '_utils/jump-into-rhythm/createAnimation';

const Frog = ({ frog, measure, delay = 0.25 }) => {
  const { isAnimating } = useSelector(state => state.jumpIntoRhythm);
  const frogRef = useRef(null);

  useEffect(() => {
    if (isAnimating) {
      const ids = measure.map(note => note.id);
      const { animation, duration } = createAnimation(ids);
      setTimeout(() => {
        frogRef.current.animate(animation, duration);
      }, delay*1000);
    }
  }, [isAnimating, measure, delay]);

  return <img ref={frogRef} className='Frog' src={frog} alt='frog' />;
};

export default Frog;