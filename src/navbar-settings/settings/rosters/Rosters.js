import React from 'react';
import useRoster from '_hooks/useRoster';

import { useSelector, useDispatch } from 'react-redux';
import { setRoster } from '_redux/settings/mainSettingsActions';

import './Rosters.css';

import NewRoster from './new-roster/NewRoster';
import AddIcon from '_components/icon/add-icon/AddIcon';
import Popup from '_components/popup/Popup';
import Dropdown from '_components/dropdown/Dropdown';

const Rosters = () => {
  const { roster } = useSelector(state => state.mainSettings);
  const [rosters] = useRoster();
  const dispatch = useDispatch();

  const handleSetRoster = e => {
    const roster = rosters[e.target.id];
    dispatch(setRoster(roster));
  };

  const createRosterSelection = () => {
    const rosterSelection = {};
    for (let rosterId in rosters) {
      rosterSelection[rosterId] = rosters[rosterId].name;
    };
    return rosterSelection;
  };

  return (
    <div className='Rosters'>
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
  );
};

export default Rosters;