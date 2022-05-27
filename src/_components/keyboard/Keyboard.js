import React from 'react';

import './Keyboard.css';

import Icon from '../icon/Icon';

import keyboard from './keyboard.png';

const Keyboard = () => {
  return (
    <div className='Keyboard'>
      <Icon icon={keyboard} size='43px' width='65px' />
    </div>
  );
};

export default Keyboard;