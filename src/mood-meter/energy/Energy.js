import React from 'react';

import { useSelector } from 'react-redux';

import './Energy.css';

import Battery from './battery/Battery';

import { HIGH_BATTERY, MEDIUM_BATTERY, LOW_BATTERY, GREEN_FILTER, YELLOW_FILTER, RED_FILTER } from '_data/mood-meter/batteryDefaults';

const Energy = () => {
  const { energy } = useSelector(state => state.moodMeter);

  const batteries = [
    { width: HIGH_BATTERY, id: 2, filter: GREEN_FILTER },
    { width: MEDIUM_BATTERY, id: 1, filter: YELLOW_FILTER },
    { width: LOW_BATTERY, id: 0, filter: RED_FILTER },
  ];
  
  return (
    <section className='Energy'>
      <p>How is your energy level?</p>
      <div className='Energy-batteries'>
        {batteries.map(battery => {
          const { width, id, filter } = battery;
          return <Battery key={id} width={width} id={id} filter={id === energy ? filter : null} />
        })}
      </div>
    </section>
  );
};

export default Energy;