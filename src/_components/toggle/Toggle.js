import React from 'react';

import './Toggle.css';

const Toggle = ({ label, currToggle, toggleFn }) => {
  return (
    <div className='Toggle'>
      <div className={`Toggle-switch ${currToggle ? 'on' : 'off'}`} onClick={toggleFn}>
        <div className='Toggle-button'></div>
        <span>ON</span>
        <span>OFF</span>
      </div>
      <span className='Toggle-label'>{label}</span>
    </div>
  );
};

export default Toggle;