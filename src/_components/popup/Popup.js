import React, { useState } from 'react';
import PopupContext from '_utils/settings/PopupContext';

import './Popup.css';

import close from '_media/general-icons/close.png';

const Popup = ({ title, trigger, triggerClass, popup }) => {
  const [isShowingPopup, setIsShowingPopup] = useState(false);
  const [currPopup, setCurrPopup] = useState({ popup, title });
  
  const handleSetTrigger = e => {
    if (isShowingPopup) {
      const correctBounds =
        e.currentTarget.classList[0] === 'Popup-close' ||
        e.target.classList[0] === 'Popup';
      if (correctBounds) {
        setIsShowingPopup(trigger => !trigger);
        setCurrPopup({ title, popup });
      }
    } else {
      setIsShowingPopup(trigger => !trigger);
      setCurrPopup({ title, popup });
    };
  };

  return (
    <PopupContext.Provider value={{ setCurrPopup }} >
      <div className={triggerClass} onClick={handleSetTrigger}>
        {trigger}
      </div>
      {isShowingPopup ? (
        <main className='Popup' onClick={handleSetTrigger}>
          <section className='Popup-box'>
            <header className='Popup-header'>
              <h1>{currPopup.title}</h1>
              <aside className='Popup-close' onClick={handleSetTrigger}>
                <img src={close} alt='close button'/>
                <span>CLOSE</span>
              </aside>
            </header>
            {currPopup.popup}
          </section>
        </main>
      ) : ''}
    </PopupContext.Provider>
  );
};

export default Popup;