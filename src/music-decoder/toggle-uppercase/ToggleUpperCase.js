import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleUpperCase } from '_redux/music-decoder/musicDecoderActions';

import Toggle from '_components/toggle/Toggle';

const ToggleUpperCase = () => {
  const { isUpperCase } = useSelector(state => state.musicDecoder);
  const dispatch = useDispatch();
  
  const handleToggle = () => dispatch(toggleUpperCase());

  return <Toggle label='UPPER CASE' currToggle={isUpperCase} toggleFn={handleToggle} />;
};

export default ToggleUpperCase;