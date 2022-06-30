import React from 'react';
import useRoster from '../../_hooks/useRoster';

import { useSelector, useDispatch } from 'react-redux';
import { setRoster, setVolume, toggleColorBlind, toggleTextToSpeech } from '../../_redux/actions/mainSettingsActions';

import './Settings.css';

import Icon from '../../_components/icon/Icon';
import Toggle from '../../_components/toggle/Toggle';
import Dropdown from '../../_components/dropdown/Dropdown';
import Popup from '../../_components/popup/Popup';
import NewRoster from './rosters/NewRoster';

import volumeHigh from './_icons/volume/volume-high.png';
import volumeMid from './_icons/volume/volume-medium.png';
import volumeLow from './_icons/volume/volume-low.png';

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
    filter: 'invert(55%) sepia(55%) saturate(5241%) hue-rotate(163deg) brightness(97%) contrast(102%)'
  };

  return (
    <main className='Settings'>
      <span className='Settings-text'>Volume</span>
      <div className='Settings-icons-volume'>
        <Icon
          icon={volumeLow}
          otherImgStyles={volume === -12 ? selectedVolume : {}}
          text='LOW'
          onClick={handleVolume}
          id='-12'
          size='50px' width='40px'
        />
        <Icon
          icon={volumeMid}
          otherImgStyles={volume === 0 ? selectedVolume : {}}
          text='MEDIUM'
          onClick={handleVolume}
          id='0'
          size='50px'
        />
        <Icon
          icon={volumeHigh}
          otherImgStyles={volume === 12 ? selectedVolume : {}}
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
          trigger='+'
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