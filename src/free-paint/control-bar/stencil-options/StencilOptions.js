import React from 'react';

import { useDispatch } from 'react-redux';
import { setDisplay } from '_redux/free-paint/freePaintActions';

import './StencilOptions.css';

import options from '_data/free-paint/freePaintOptions';

const StencilOptions = ({ id }) => {
  const dispatch = useDispatch();

  const handleChangeDisplay = e => {
    dispatch(setDisplay(id === 'shapes'
      ? e.target.src
      : e.target.textContent
    ));
  };

  return (
    <div className='StencilOptions'>
      {options[id].map(o => id === 'shapes'
        ? <img onClick={handleChangeDisplay} className='StencilOptions-option' src={o[0]} alt={o[1]} />
        : <span onClick={handleChangeDisplay} className='StencilOptions-option'>{o}</span>)}
    </div>
  );
};

export default StencilOptions;