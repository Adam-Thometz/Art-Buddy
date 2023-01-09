import React from 'react';

import { useSelector } from 'react-redux';

import './Energy.css';

import Battery from './battery/Battery';

import batteries from '_data/mood-meter/batteries';

const Energy = () => {
  const { energy } = useSelector(state => state.moodMeter);
  
  return (
    <section className='Energy'>
      <p>How is your energy level?</p>
      <div className='Energy-batteries'>
        {batteries.map(battery => {
          const { width, id, filter } = battery;
          return <Battery key={id} width={width} id={id} filter={id === energy ? filter : null} />;
        })}
      </div>
    </section>
  );
};

export default Energy;