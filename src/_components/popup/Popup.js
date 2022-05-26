import React, { Fragment, useState } from 'react';

import './Popup.css';

import close from './_icons/close.png';

const Popup = ({ title, trigger, triggerClass, popup }) => {
  const [popupTrigger, setPopupTrigger] = useState(false);
  
  const handleSetTrigger = e => {
    if (popupTrigger) {
      const correctBounds =
        e.currentTarget.classList[0] === 'Popup-close' ||
        e.target.classList[0] === 'Popup';
      if (correctBounds) {
        setPopupTrigger(trigger => !trigger);
      }
    } else {
      setPopupTrigger(trigger => !trigger);
    };
  }

  return (
    <>
      <div className={triggerClass} onClick={handleSetTrigger}>
        {trigger}
      </div>
      {popupTrigger ? (
        <main className='Popup' onClick={handleSetTrigger}>
          <section className='Popup-box'>
            <header className='Popup-header'>
              <h1>{title}</h1>
              <aside className='Popup-close' onClick={handleSetTrigger}>
                <img src={close} alt='close button'/>
                <span>CLOSE</span>
              </aside>
            </header>
            {popup}
          </section>
        </main>
      ) : ''}
    </>
  )
  // return trigger ? (
  // ) : '';
};

export default Popup;