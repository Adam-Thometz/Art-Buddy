import React from 'react';

import { useSelector } from 'react-redux';

import './Valence.css';

import Face from './face/Face';

import high from '_media/mood-meter/valence-high.png';
import medium from '_media/mood-meter/valence-medium.png';
import low from '_media/mood-meter/valence-low.png';

const Valence = () => {
  const { valence } = useSelector(state => state.moodMeter);

  const faces = [
    { src: high, id: 2 },
    { src: medium, id: 1 },
    { src: low, id: 0 },
  ];
  
  return (
    <section className='Valence'>
      <p>How are you feeling today?</p>
      <div className='Valence-faces'>
        {faces.map(face => {
          const { id, src } = face;
          return <Face key={id} src={src} id={id} isSelected={id === valence} />
        })}
      </div>
    </section>
  );
};

export default Valence;