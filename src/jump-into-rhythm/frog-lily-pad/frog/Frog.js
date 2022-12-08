import React from 'react';

import { useSelector } from 'react-redux';

import './Frog.css';

import { Time } from 'tone';

const Frog = ({ frog, delay = 0 }) => {
  const { isAnimating } = useSelector(state => state.jumpIntoRhythm);
  return <img
    className={`Frog${isAnimating ? ' animation' : ''}`}
    src={frog}
    alt='frog'
    style={isAnimating ? {
      '--duration': `${Time('1:1').toSeconds()}s`,
      '--delay': `${delay}s`,
    } : {}} />;
};

export default Frog;