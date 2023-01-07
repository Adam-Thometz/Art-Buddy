import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleTextToSpeech } from '_redux/settings/settingsActions';

import './TextToSpeech.css';

import Toggle from '_components/toggle/Toggle';

const TextToSpeech = () => {
  const { textToSpeech } = useSelector(state => state.settings);
  const dispatch = useDispatch();
  
  const handleTextToSpeech = () => dispatch(toggleTextToSpeech());

  return (
    <div className='TextToSpeech'>
      <Toggle currToggle={textToSpeech} toggleFn={handleTextToSpeech} />
    </div>
  );
};

export default TextToSpeech;