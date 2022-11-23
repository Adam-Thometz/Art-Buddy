import React from 'react';
import Draggable from 'react-draggable';

import { useSelector, useDispatch } from 'react-redux';
import { setStencil } from '_redux/free-paint/freePaintActions';

import './Stencil.css';

import close from '_media/general-icons/close.png';

const Stencil = () => {
  const { stencil, isEditingStencil } = useSelector(state => state.freePaint);
  const dispatch = useDispatch();
  const zIndex = isEditingStencil ? 5 : 3;

  const handleClearDisplay = () => dispatch(setStencil(null));

  return (
    <Draggable>
      <div className='Stencil' style={{ zIndex }}>
        <img
          className='Stencil-clear'
          src={close}
          alt=''
          aria-label='Clear the stencil'
          onClick={handleClearDisplay}
        />
        {stencil.startsWith('data:image')
          ? <img className='Stencil-shape' src={stencil} alt='' />
          : <span className='Stencil-text'>{stencil}</span>
        }
      </div>
    </Draggable>
  );
};

export default Stencil;