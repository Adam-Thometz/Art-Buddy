import React, { useState } from 'react';

import './Input.css';

const Input = ({ type = 'text', label, id,  }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value)
  }

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
    </div>
  );
};

export default Input;