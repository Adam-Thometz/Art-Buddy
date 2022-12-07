import React, { useState } from 'react';
import ControlBarContext from '_utils/free-paint/ControlBarContext';

import { useSelector, useDispatch } from 'react-redux';
import { setIsErasing, setEditStencilMode } from '_redux/free-paint/freePaintActions';

import './ControlBar.css';

import ButtonWrapper from './button-wrapper/ButtonWrapper';
import StencilOptions from './stencil-options/StencilOptions';
import ColorOptions from './color-options/ColorOptions';

import square from '_media/free-paint/shapes/square.png';
import stencil from '_media/free-paint/stencil.png';
import pencil from '_media/free-paint/pencil.png';
import eraser from '_media/free-paint/eraser.png';

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

  const handleEditStencilMode = () => dispatch(setEditStencilMode(!isEditingStencil));

  return (
    <ControlBarContext.Provider value={{ shownOptions, handleShownOptions }}>
      <section className='ControlBar'>
        <ButtonWrapper label="ABC" id="upperCase" Popout={StencilOptions} colorId={4} />
        <ButtonWrapper label="abc" id="lowerCase" Popout={StencilOptions} colorId={0} />
        <ButtonWrapper label="123" id="numbers" Popout={StencilOptions} colorId={1} />
        <ButtonWrapper label={square} id="shapes" Popout={StencilOptions} colorId={2} />

        <ButtonWrapper label="Stencil" iconImg={stencil} onClick={handleEditStencilMode} />
        <ButtonWrapper label="Pencil" id="colors" iconImg={pencil} Popout={ColorOptions} color={color} />
        <ButtonWrapper label="Eraser" iconImg={eraser} onClick={handleSetEraser} color={isErasing ? '#FF69B4' : '#000000'} />
      </section>
    </ControlBarContext.Provider>
  );
};

export default ControlBar;