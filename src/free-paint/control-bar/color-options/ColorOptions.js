import React from 'react';

import { useDispatch } from 'react-redux';
import { setColor } from '_redux/free-paint/freePaintActions';

import './ColorOptions.css';

import paintColors from '_data/free-paint/colors';

const ColorOptions = () => {
  const dispatch = useDispatch();

  const handleChangeColor = e => {
    console.log(e.target.id);
    dispatch(setColor(e.target.id));
  }

  return (
    <div className='ColorOptions'>
      {paintColors.map(backgroundColor => (
        <div className='ColorOptions-option' id={backgroundColor} style={{ backgroundColor }} onClick={handleChangeColor}></div>
      ))}
    </div>
  );
};

export default ColorOptions;