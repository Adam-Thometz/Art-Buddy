import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import './Stencil.css';

import close from '_media/general-icons/close.png';
import { setDisplay } from '_redux/free-paint/freePaintActions';

const Stencil = () => {
  const { display } = useSelector(state => state.freePaint);
  const dispatch = useDispatch();

  const handleClearDisplay = () => dispatch(setDisplay(null));

  return display ? 
    <div className='Stencil'>
      <img
        className='Stencil-clear'
        src={close}
        alt=''
        aria-label='Clear the stencil'
        onClick={handleClearDisplay}
      />
      {display.startsWith('data:image')
        ? <img className='Stencil-shape' src={display} alt='' />
        : <span className='Stencil-text'>{display}</span>
      }
    </div> : null;
};

export default Stencil;