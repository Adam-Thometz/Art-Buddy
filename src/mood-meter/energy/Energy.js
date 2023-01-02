import React from 'react';

import { useSelector } from 'react-redux';

import './Energy.css';

import Battery from './battery/Battery';

import prependBrightnessAndSaturation from '_utils/_general/prependBrightnessAndSaturation';

const GREEN_FILTER = prependBrightnessAndSaturation('invert(68%) sepia(56%) saturate(915%) hue-rotate(38deg) brightness(109%) contrast(92%)');
const YELLOW_FILTER = prependBrightnessAndSaturation('invert(99%) sepia(44%) saturate(4778%) hue-rotate(335deg) brightness(102%) contrast(104%)');
const RED_FILTER = prependBrightnessAndSaturation('invert(49%) sepia(82%) saturate(4390%) hue-rotate(339deg) brightness(101%) contrast(98%)');

const Energy = () => {
  const { energy } = useSelector(state => state.moodMeter);

  const batteries = [
    { width: '89%', id: 2, filter: GREEN_FILTER },
    { width: '48%', id: 1, filter: YELLOW_FILTER },
    { width: '12%', id: 0, filter: RED_FILTER },
  ];
  
  return (
    <section className='Energy'>
      <p>How is your energy level?</p>
      <div className='Energy-batteries'>
        {batteries.map(battery => (
          <Battery width={battery.width} id={battery.id} filter={battery.id === energy ? battery.filter : null} />
        ))}
      </div>
    </section>
  );
};

export default Energy;