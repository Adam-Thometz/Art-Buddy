import React, { Fragment, useState } from 'react';

import './Popup.css';

import close from './_icons/close.png';

const Popup = ({ title, trigger, triggerClass, popup }) => {
  const [popupTrigger, setPopupTrigger] = useState(false);
  
  const handleSetTrigger = e => {
    if (popupTrigger && e.target.classList[0] !== 'Popup') return;
    setPopupTrigger(trigger => !trigger);
  }

  return (
    <>
      <div className={triggerClass} onClick={handleSetTrigger}>
        {trigger}
      </div>
      {popupTrigger ? (
        <div className='Popup' onClick={handleSetTrigger}>
          <div className='Popup-box'>
            <div className='Popup-header'>
              <h1>{title}</h1>
              <div className='Popup-close' onClick={handleSetTrigger}>
                <img src={close} alt='close button'/>
                <span>CLOSE</span>
              </div>
            </div>
            {popup}
          </div>
        </div>
      ) : ''}
    </>
  )
  // return trigger ? (
  // ) : '';
};

export default Popup;