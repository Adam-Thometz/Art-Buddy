import React from 'react';

import { useSelector } from 'react-redux';

import './ColorWheel.css';

const ColorWheel = () => {
  const { colorWheel } = useSelector(state => state.colorTheory);

  const colors = Object.keys(colorWheel).map(c => {
    const { color, transform, isShowing } = colorWheel[c];
    const styles = {
      backgroundColor: isShowing.color ? color.hex : '#D9D9D9',
      transform
    };
    return (
      <div className='ColorWheel-color' style={styles}>
        {isShowing.text ? c : null}
      </div>
    );
  });

  return (
    <div className='ColorWheel'>
      {colors}
    </div>
  );
};

export default ColorWheel;