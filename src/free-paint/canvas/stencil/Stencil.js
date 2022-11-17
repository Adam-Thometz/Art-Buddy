import React from 'react';

import { useSelector } from 'react-redux';

import './Stencil.css';

const Stencil = () => {
  const { display } = useSelector(state => state.freePaint);

  // const handleClearDisplay = () => dispatch(setDisplay(null));

  return (
    <div className='Stencil'>
      {display.startsWith('data:image')
        ? <img className='Stencil-shape' src={display} alt='' />
        : <span className='Stencil-text'>{display}</span>
      }
    </div>
  );
};

export default Stencil;