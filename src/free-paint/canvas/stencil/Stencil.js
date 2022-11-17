import React from 'react';

import { useSelector } from 'react-redux';

import './Stencil.css';

const Stencil = () => {
  const { stencil } = useSelector(state => state.freePaint);

  // const handleClearDisplay = () => dispatch(setDisplay(null));

  return (
    <div className='Stencil'>
      {stencil.startsWith('data:image')
        ? <img className='Stencil-shape' src={stencil} alt='' />
        : <span className='Stencil-text'>{stencil}</span>
      }
    </div>
  );
};

export default Stencil;