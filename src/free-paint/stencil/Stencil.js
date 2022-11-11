import React from 'react';

import { useSelector } from 'react-redux';

import './Stencil.css';

const Stencil = () => {
  const { display } = useSelector(state => state.freePaint);
  return display ? 
    <div className='Stencil'>
      
      {display.startsWith('data:image')
        ? <img src={display} alt='' />
        : <span className='Stencil-text'>{display}</span>
      }
    </div> : null;
};

export default Stencil;