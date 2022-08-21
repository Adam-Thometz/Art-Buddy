import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleColorBlind } from '_redux/settings/mainSettingsActions';

import './ColorBlind.css';

import Toggle from '_components/toggle/Toggle';

const ColorBlind = () => {
  const { colorBlind } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch();

  const handleColorBlind = () => dispatch(toggleColorBlind());

  return (
    <div className='ColorBlind'>
      <Toggle currToggle={colorBlind} toggleFn={handleColorBlind} />
    </div>
  );
};

export default ColorBlind;