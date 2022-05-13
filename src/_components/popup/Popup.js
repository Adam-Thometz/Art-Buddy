import React from 'react';

import './Popup.css';

import close from './_icons/close.png';

const Popup = ({ children, title, trigger, setTrigger }) => {
  const handleSetTrigger = () => {
    setTrigger(trigger => !trigger);
  }

  return trigger ? (
    <div className='Popup'>
      <div className='Popup-box'>
        <div className='Popup-header'>
          <h1>{title}</h1>
          <div className='Popup-close' onClick={handleSetTrigger}>
            <img src={close} alt='close button'/>
            <span>CLOSE</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  ) : '';
};

export default Popup;