import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setIsErasing, setEditStencilMode } from '_redux/free-paint/freePaintActions';

import './ControlBar.css';

import Button from '_components/button/Button';
import Icon from '_components/icon/Icon';
import StencilOptions from './stencil-options/StencilOptions';
import ColorOptions from './color-options/ColorOptions';

import square from '_media/free-paint/shapes/square.png';
import stencil from '_media/free-paint/stencil.png';
import pencil from '_media/free-paint/pencil.png';
import eraser from '_media/free-paint/eraser.png';
import { colorsToFilter } from '_data/free-paint/colors';

const ControlBar = () => {
  const [shownOptions, setShownOptions] = useState(null);
  const { color, isEditingStencil, isErasing } = useSelector(state => state.freePaint);
  const dispatch = useDispatch();

  const handleShownOptions = e => {
    const { tagName, id, parentElement } = e.target;
    const currId = tagName === 'BUTTON' ? id : parentElement.id;
    setShownOptions(currId === shownOptions ? null : currId);
  };

  const handleSetEraser = () => dispatch(setIsErasing(!isErasing));

  const handleEditStencil = () => dispatch(setEditStencilMode(!isEditingStencil));

  const pencilColor = { filter: colorsToFilter.get(color) };

  // if erasing, set icon color to pink, else set it to black
  const eraserColor = {
    filter: colorsToFilter.get(isErasing ? '#FF69B4' : '#000000'),
    color: isErasing ? '#FF69B4' : '#000000',
    borderColor: isErasing ? '#FF69B4' : '#000000',
  };

  return (
    <section className='ControlBar'>
      {/* Mouse */}
      <div className='ControlBar-button-wrapper'>
        <Button onClick={handleEditStencil}>
          <Icon size='45px' text='Stencil' icon={stencil} />
        </Button>
      </div>
      {/* Pencil */}
      <div className='ControlBar-button-wrapper'>
        <Button id='colors' otherStyles={{ color, borderColor: color }} onClick={handleShownOptions}>
          <Icon id='colors' size='45px' text="Pencil" icon={pencil} onClick={handleShownOptions} otherImgStyles={pencilColor} />
        </Button>
        {shownOptions === 'colors' ? <ColorOptions /> : null}
      </div>
      {/* Eraser */}
      <div className='ControlBar-button-wrapper'>
        <Button onClick={handleSetEraser} otherStyles={{ 
          color: eraserColor.color,
          borderColor: eraserColor.borderColor 
        }}>
          <Icon size='45px' text="Eraser" icon={eraser} otherImgStyles={{ filter: eraserColor.filter }} />
        </Button>
      </div>
      {/* Uppercase */}
      <div className='ControlBar-button-wrapper'>
        <Button id='upperCase' colorId={4} onClick={handleShownOptions}>ABC</Button>
        {shownOptions === 'upperCase' ? <StencilOptions id='upperCase' /> : null}
      </div>
      {/* Lowercase */}
      <div className='ControlBar-button-wrapper'>
        <Button id='lowerCase' colorId={0} onClick={handleShownOptions}>abc</Button>
        {shownOptions === 'lowerCase' ? <StencilOptions id='lowerCase' /> : null}
      </div>
      {/* Numbers */}
      <div className='ControlBar-button-wrapper'>
        <Button id='numbers' colorId={1} onClick={handleShownOptions}>123</Button>
        {shownOptions === 'numbers' ? <StencilOptions id='numbers' /> : null}
      </div>
      {/* Shapes */}
      <div className='ControlBar-button-wrapper'>
        <Button id='shapes' colorId={2} onClick={handleShownOptions}>
          <img className='ControlBar-shape-button' src={square} alt="Shapes"/>
        </Button>
        {shownOptions === 'shapes' ? <StencilOptions id='shapes' /> : null}
      </div>
    </section>
  );
};

export default ControlBar;