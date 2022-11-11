import React from 'react';

import { useDispatch } from 'react-redux';
import { setColor } from '_redux/free-paint/freePaintActions';

import './ColorOptions.css';

import paintColors from '_data/free-paint/colors';

const ColorOptions = () => {
  const dispatch = useDispatch();

  const handleChangeColor = e => dispatch(setColor(e.target.id));

  return (
    <div className='ColorOptions'>
      {paintColors.map(color => (
        <div
          className='ColorOptions-option'
          data-testid={`color-option-${color}`}
          id={color}
          style={{ backgroundColor: color }}
          onClick={handleChangeColor}
        ></div>
      ))}
    </div>
  );
};

export default ColorOptions;