import React from 'react';

import { useSelector } from 'react-redux';

import './Stencil.css';

const Stencil = () => {
  const { stencil, isEditingStencil } = useSelector(state => state.freePaint);

  const zIndex = isEditingStencil ? 5 : 3;

  return (
    <div className='Stencil' style={{ zIndex }}>
      {stencil.startsWith('data:image')
        ? <img className='Stencil-shape' src={stencil} alt='' />
        : <span className='Stencil-text'>{stencil}</span>
      }
    </div>
  );
};

export default Stencil;