import React from 'react';
import useRoster from '../../_hooks/useRoster';

import { useSelector, useDispatch } from 'react-redux';
import { setRoster, setVolume, toggleColorBlind, toggleTextToSpeech } from '../../_redux/actions/mainSettingsActions';

import './Settings.css';

import Icon from '../../_components/icon/Icon';
import Toggle from '../../_components/toggle/Toggle';
import Dropdown from '../../_components/dropdown/Dropdown';

import volumeHigh from './_icons/volume/volume-high.png';
import volumeMid from './_icons/volume/volume-medium.png';
import volumeLow from './_icons/volume/volume-low.png';
import Popup from '../../_components/popup/Popup';
import NewRoster from './rosters/NewRoster';

const Settings = () => {
  const { 
    textToSpeech,
    colorBlind,
    roster
  } = useSelector(state => state.mainSettings);
  const [rosters] = useRoster();
  const dispatch = useDispatch();
  
  const createRosterSelection = () => {
    const rosterSelection = {}
    for (let rosterId in rosters) {
      rosterSelection[rosterId] = rosters[rosterId].name;
    }

    console.log(rosterSelection);
    return rosterSelection
  }
  
  const handleVolume = e => dispatch(setVolume(e.target.id));
  const handleTextToSpeech = () => dispatch(toggleTextToSpeech());
  const handleColorBlind = () => dispatch(toggleColorBlind());
  const handleSetRoster = e => {
    const selectedRosterId = e.target.id;
    const rosterToSet = rosters[selectedRosterId];
    dispatch(setRoster(rosterToSet))
  };

  return (
    <main className='Settings'>
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
        <Popup
          title='NEW ROSTER'
          trigger='+'
          triggerClass='Settings-add-roster'
          popup={<NewRoster />}
        />
        {Object.keys(rosters).length ? (
          <Dropdown labelText={roster.name ? roster.name : 'SELECT ROSTER'} onClick={handleSetRoster} options={createRosterSelection()} />
        ) : null}
      </div>
      <div className='Settings-icons'>
      </div>
    </main>
  );
};

export default Settings;