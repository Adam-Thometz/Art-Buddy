import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import './ControlBar.css';

import Button from '_components/button/Button';
import Icon from '_components/icon/Icon';
import StencilOptions from './stencil-options/StencilOptions';
import ColorOptions from './color-options/ColorOptions';

import square from '_media/free-paint/shapes/square.png';
import pencil from '_media/free-paint/pencil.png';
import eraser from '_media/free-paint/eraser.png';
import { colorsToFilter } from '_data/free-paint/colors';

const ControlBar = () => {
  const [shownOptions, setShownOptions] = useState(null);
  const { color } = useSelector(state => state.freePaint);

  const handleSetShownOptions = e => {
    const { tagName, id, parentElement } = e.target;
    const currId = tagName === 'BUTTON' ? id : parentElement.id;
    setShownOptions(currId === shownOptions ? null : currId);
  };

  const buttonStyle = {
    width: '105px',
    height: '90px',
    borderWidth: '6px',
    margin: '2px',
    padding: '3%',
  };

  const pencilColor = { filter: colorsToFilter.get(color) };

  return (
    <section className='ControlBar'>
      {/* <ButtonWrapper id='uppercase' colorId={4}  /> */}
      <div className='ControlBar-button-wrapper'>
        <Button id='upperCase' otherStyles={buttonStyle} colorId={4} onClick={handleSetShownOptions}>ABC</Button>
        {shownOptions === 'upperCase' ? <StencilOptions id='upperCase' /> : null}
      </div>
      <div className='ControlBar-button-wrapper'>
        <Button id='lowerCase' otherStyles={buttonStyle} colorId={0} onClick={handleSetShownOptions}>abc</Button>
        {shownOptions === 'lowerCase' ? <StencilOptions id='lowerCase' /> : null}
      </div>
      <div className='ControlBar-button-wrapper'>
        <Button id='numbers' otherStyles={buttonStyle} colorId={1} onClick={handleSetShownOptions}>123</Button>
        {shownOptions === 'numbers' ? <StencilOptions id='numbers' /> : null}
      </div>
      <div className='ControlBar-button-wrapper'>
        <Button id='shapes' otherStyles={buttonStyle} colorId={2} onClick={handleSetShownOptions}>
          <img className='ControlBar-shape-button' src={square} alt="Shapes"/>
        </Button>
        {shownOptions === 'shapes' ? <StencilOptions id='shapes' /> : null}
      </div>
      <div className='ControlBar-button-wrapper'>
        <Button id='colors' otherStyles={{ ...buttonStyle, borderColor: color, color }} onClick={handleSetShownOptions}>
          <Icon id='colors' size='45px' text="Pencil" icon={pencil} otherImgStyles={pencilColor} onClick={handleSetShownOptions} />
        </Button>
        {shownOptions === 'colors' ? <ColorOptions /> : null}
      </div>
      <Button otherStyles={buttonStyle}>
        <Icon size='45px' text="Eraser" icon={eraser} />
      </Button>
    </section>
  );
};

export default ControlBar;