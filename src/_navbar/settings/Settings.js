import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setVolume, toggleColorBlind, toggleTextToSpeech } from '../../_redux/actions/mainSettingsActions';

import './Settings.css';

import Icon from '../../_components/icon/Icon';
import Toggle from '../../_components/toggle/Toggle';
import Dropdown from '../../_components/dropdown/Dropdown';

import volumeHigh from './_icons/volume/volume-high.png';
import volumeMid from './_icons/volume/volume-medium.png';
import volumeLow from './_icons/volume/volume-low.png';

const Settings = () => {
  const { 
    textToSpeech,
    colorBlind,
    roster
  } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch();

  const handleVolume = e => dispatch(setVolume(e.target.id));
  const handleTextToSpeech = () => dispatch(toggleTextToSpeech());
  const handleColorBlind = () => dispatch(toggleColorBlind());
  const handleSetRoster = e => console.log('Roster!');

  return (
    <div className='Settings'>
      <span className='Settings-text'>Volume</span>
      <div className='Settings-icons-volume'>
        <Icon icon={volumeLow} text='LOW' onClick={handleVolume} id='low' size='50px' width='40px' />
        <Icon icon={volumeMid} text='MEDIUM' onClick={handleVolume} id='medium' size='50px' />
        <Icon icon={volumeHigh} text='HIGH' onClick={handleVolume} id='high' size='50px' width='60px' />
      </div>

      <span className='Settings-text'>Text to Speech</span>
      <span className='Settings-toggle'>
        <Toggle currToggle={textToSpeech} toggleFn={handleTextToSpeech} />
      </span>

      <span className='Settings-text'>Color Blind</span>
      <span className='Settings-toggle'>
        <Toggle currToggle={colorBlind} toggleFn={handleColorBlind} />
      </span>

      <span className='Settings-text'>Roster</span>
      <div className='Settings-icons-roster'>
        <span className='Settings-add-roster'>+</span>
        <Dropdown labelText='SELECT ROSTER' onClick={handleSetRoster} options={roster} />
      </div>
      <div className='Settings-icons'>
      </div>
    </div>
  );
};

export default Settings;