import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './ControlBar.css';

import Button from '_components/button/Button';
import Icon from '_components/icon/Icon';

import square from '_media/free-paint/shapes/square.png';
import pencil from '_media/free-paint/pencil.png';
import eraser from '_media/free-paint/eraser.png';
import options from '_data/free-paint/freePaintOptions';
import colorsToFilter from '_data/free-paint/colorToFilter';

const Options = () => {
  const { color, display } = useSelector(state => state.freePaint);
  const dispatch = useDispatch()

  const handleChangeColor = e => {

  }
  
  const handleChangeDisplay = e => {

  }

  const buttonStyle = {
    width: '105px',
    height: '90px',
    borderWidth: '6px',
    margin: '2px',
    padding: '3%'
  };

  const pencilColor = { filter: colorsToFilter[color] };

  return (
    <div className='ControlBar'>
      <Button otherStyles={buttonStyle} colorId={4}>ABC</Button>
      <Button otherStyles={buttonStyle} colorId={0}>abc</Button>
      <Button otherStyles={buttonStyle} colorId={1}>123</Button>
      <Button otherStyles={buttonStyle} colorId={2}><img
        className='ControlBar-shape-button'
        src={square}
        alt="Shapes"
      /></Button>
      <Button 
        otherStyles={{ ...buttonStyle, ...pencilColor }}
      ><Icon size='45px' text="Pencil" icon={pencil} /></Button>
      <Button otherStyles={buttonStyle}><Icon size='45px' text="Eraser" icon={eraser} /></Button>
    </div>
  );
};

export default Options;