import React, { useState } from 'react';

import './Input.css';

import Icon from '../icon/Icon';

import keyboard from './keyboard.png';

const Input = ({ type = 'text', label, id, otherOnChange = null }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
    if (otherOnChange) otherOnChange(e)
  };

  return (
    <div className='Input'>
      <label className='Input-label' htmlFor={id}>{label}</label>
      <input
        className='Input-input'
        type={type}
        id={id}
        name={id}
        onChange={handleChange}
        value={input}
      />
      <div className='Input-keyboard'>
        <Icon icon={keyboard} text='OPEN KEYBOARD' size='40px' />
      </div>
    </div>
  );
};

export default Input;