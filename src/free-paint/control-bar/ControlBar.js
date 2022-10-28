import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './ControlBar.css';

import Button from '_components/button/Button';
import Icon from '_components/icon/Icon';

import square from '_media/free-paint/shapes/square.png';
import pencil from '_media/free-paint/pencil.png';
import eraser from '_media/free-paint/eraser.png';
import options from '_data/free-paint/freePaintOptions';
import colorsToFilter from '_data/free-paint/colorsToFilter';

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
    <section className='ControlBar'>
      <div className='ControlBar-button-wrapper'>
        <Button otherStyles={buttonStyle} colorId={4}>ABC</Button>
        <div className='ControlBar-options'>
          {options.upperCase.map(o => <span className='ControlBar-option'>{o}</span>)}
        </div>
      </div>
      <div className='ControlBar-button-wrapper'>
        <Button otherStyles={buttonStyle} colorId={0}>abc</Button>
        <div className='ControlBar-options'>
          {options.lowerCase.map(o => <span className='ControlBar-option'>{o}</span>)}
        </div>
      </div>
      <div className='ControlBar-button-wrapper'>
        <Button otherStyles={buttonStyle} colorId={1}>123</Button>
        <div className='ControlBar-options'>
          {options.numbers.map(o => <span className='ControlBar-option'>{o}</span>)}
        </div>
      </div>
      <div className='ControlBar-button-wrapper'>
        <Button otherStyles={buttonStyle} colorId={2}><img
          className='ControlBar-shape-button'
          src={square}
          alt="Shapes"
        /></Button>
        <div className='ControlBar-options'>
          {options.shapes.map(o => <img className='ControlBar-option' src={o[0]} alt={o[1]} />)}
        </div>
      </div>
      <Button 
        otherStyles={{ ...buttonStyle, ...pencilColor }}
      ><Icon size='45px' text="Pencil" icon={pencil} /></Button>
      <Button otherStyles={buttonStyle}><Icon size='45px' text="Eraser" icon={eraser} /></Button>
    </section>
  );
};

export default Options;