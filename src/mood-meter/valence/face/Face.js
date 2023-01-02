import React from 'react';

import { useDispatch } from 'react-redux';
import { setValence } from '_redux/mood-meter/moodMeterActions';

import './Face.css';

const Face = ({ src, isSelected, id }) => {
  const dispatch = useDispatch();
  
  const handleSelect = e => dispatch(setValence(+e.target.id))
  
  const className = `Face${isSelected ? ' selected-face' : ''}`;
  return (
    <div className={className} id={id} onClick={handleSelect} data-testid={`face${id}`}>
      <img src={src} alt='' id={id} onClick={handleSelect} />
    </div>
  );
};

export default Face;