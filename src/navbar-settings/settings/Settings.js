import React from 'react';
import useRoster from '_hooks/useRoster';

import { useSelector, useDispatch } from 'react-redux';
import { setRoster, setVolume, toggleColorBlind, toggleTextToSpeech } from '_redux/settings/mainSettingsActions';

import './Settings.css';

import Icon from '_components/icon/Icon';
import Toggle from '_components/toggle/Toggle';
import Dropdown from '_components/dropdown/Dropdown';
import Popup from '_components/popup/Popup';
import AddIcon from '_components/icon/add-icon/AddIcon';
import NewRoster from './rosters/NewRoster';

import volumeHigh from '_media/settings/volume/volume-high.png';
import volumeMid from '_media/settings/volume/volume-medium.png';
import volumeLow from '_media/settings/volume/volume-low.png';

const Settings = () => {
  const {
    volume,
    textToSpeech,
    colorBlind,
    roster
  } = useSelector(state => state.mainSettings);
  const [rosters] = useRoster();
  const dispatch = useDispatch();
  
  const createRosterSelection = () => {
    const rosterSelection = {};
    for (let rosterId in rosters) {
      rosterSelection[rosterId] = rosters[rosterId].name;
    };
    return rosterSelection;
  };
  
  const handleVolume = e => dispatch(setVolume(+e.currentTarget.id));
  const handleTextToSpeech = () => dispatch(toggleTextToSpeech());
  const handleColorBlind = () => dispatch(toggleColorBlind());
  const handleSetRoster = e => dispatch(setRoster(rosters[e.target.id]));

  const selectedVolume = { 
    // Space Cadet (not completely accurate)
    filter: 'invert(9%) sepia(31%) saturate(5353%) hue-rotate(221deg) brightness(100%) contrast(94%)'
  };

  const unselectedVolume = {
    // Light Grey (not completely accurate)
    filter: 'invert(71%) sepia(83%) saturate(6%) hue-rotate(236deg) brightness(103%) contrast(89%)'
  };

  return (
    <main className='Settings'>
      <span className='Settings-text'>Volume</span>
      <div className='Settings-icons-volume'>
        <Icon
          icon={volumeLow}
          otherImgStyles={volume === -12 ? selectedVolume : unselectedVolume}
          text='LOW'
          onClick={handleVolume}
          id='-12'
          size='50px' width='40px'
        />
        <Icon
          icon={volumeMid}
          otherImgStyles={volume === 0 ? selectedVolume : unselectedVolume}
          text='MEDIUM'
          onClick={handleVolume}
          id='0'
          size='50px'
        />
        <Icon
          icon={volumeHigh}
          otherImgStyles={volume === 12 ? selectedVolume : unselectedVolume}
          text='HIGH'
          onClick={handleVolume}
          id='12'
          size='50px' width='60px'
        />
      </div>

      <span className='Settings-text'>Text-to-Speech</span>
      <span className='Settings-toggle'>
        <Toggle currToggle={textToSpeech} toggleFn={handleTextToSpeech} />
      </span>

      <span className='Settings-text'>Color Blind Mode</span>
      <span className='Settings-toggle'>
        <Toggle currToggle={colorBlind} toggleFn={handleColorBlind} />
      </span>

      <span className='Settings-text'>Roster</span>
      <div className='Settings-icons-roster'>
        <Popup
          title='NEW ROSTER'
          trigger={<AddIcon text='ADD' size='42px' />}
          triggerClass='Settings-add-roster'
          popup={<NewRoster />}
        />
        {Object.keys(rosters).length ? (
          <Dropdown labelText={roster.name ? roster.name : 'SELECT ROSTER'} onClick={handleSetRoster} options={createRosterSelection()} />
        ) : null}
      </div>
    </main>
  );
};

export default Settings;