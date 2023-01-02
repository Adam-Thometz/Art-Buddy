import React from 'react';

import { useDispatch } from 'react-redux';
import { setEnergy } from '_redux/mood-meter/moodMeterActions';

import './Battery.css';

import battery from '_media/mood-meter/battery.png';
import batteryBar from '_media/mood-meter/battery-bar.png';

const Battery = ({ width, filter, id }) => {
  const dispatch = useDispatch();

  const handleSelect = e => dispatch(setEnergy(+e.target.id));

  const className = `Battery${filter ? ' selected-battery' : ''}`
  return (
    <div className={className} id={id} onClick={handleSelect} data-testid={`battery${id}`}>
      <img src={battery} alt='' id={id} onClick={handleSelect} />
      <img src={batteryBar} alt='' style={{ width, filter }} id={id} onClick={handleSelect} />
    </div>
  );
};

export default Battery;