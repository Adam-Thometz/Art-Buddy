import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setIsErasing } from '_redux/free-paint/freePaintActions';

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
  const dispatch = useDispatch();

  const handleSetShownOptions = e => {
    const { tagName, id, parentElement } = e.target;
    const currId = tagName === 'BUTTON' ? id : parentElement.id;
    setShownOptions(currId === shownOptions ? null : currId);
  };

  const handleSetEraser = () => dispatch(setIsErasing(true));

  const pencilColor = { filter: colorsToFilter.get(color) };

  return (
    <section className='ControlBar'>
      {/* Uppercase */}
      <div className='ControlBar-button-wrapper'>
        <Button id='upperCase' colorId={4} onClick={handleSetShownOptions}>ABC</Button>
        {shownOptions === 'upperCase' ? <StencilOptions id='upperCase' /> : null}
      </div>
      {/* Lowercase */}
      <div className='ControlBar-button-wrapper'>
        <Button id='lowerCase' colorId={0} onClick={handleSetShownOptions}>abc</Button>
        {shownOptions === 'lowerCase' ? <StencilOptions id='lowerCase' /> : null}
      </div>
      {/* Numbers */}
      <div className='ControlBar-button-wrapper'>
        <Button id='numbers' colorId={1} onClick={handleSetShownOptions}>123</Button>
        {shownOptions === 'numbers' ? <StencilOptions id='numbers' /> : null}
      </div>
      {/* Shapes */}
      <div className='ControlBar-button-wrapper'>
        <Button id='shapes' colorId={2} onClick={handleSetShownOptions}>
          <img className='ControlBar-shape-button' src={square} alt="Shapes"/>
        </Button>
        {shownOptions === 'shapes' ? <StencilOptions id='shapes' /> : null}
      </div>
      {/* Pencil */}
      <div className='ControlBar-button-wrapper'>
        <Button id='colors' otherStyles={{ color, borderColor: color }} onClick={handleSetShownOptions}>
          <Icon
            id='colors'
            size='45px'
            text="Pencil"
            icon={pencil}
            otherImgStyles={pencilColor}
            onClick={handleSetShownOptions}
          />
        </Button>
        {shownOptions === 'colors' ? <ColorOptions /> : null}
      </div>
      {/* Eraser */}
      <div className='ControlBar-button-wrapper'>
        <Button onClick={handleSetEraser}>
          <Icon size='45px' text="Eraser" icon={eraser} />
        </Button>
      </div>
    </section>
  );
};

export default ControlBar;