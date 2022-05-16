import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addInstrument, selectInstrument } from '../../../_redux/actions/insturmentIdActions';

import './SongMaker.css';

import Button from '../../../_components/button/Button';
import Dropdown from '../../../_components/dropdown/Dropdown';
import Icon from '../../../_components/icon/Icon';

import { addInstrumentIcon } from '../../_icons/iconImports';
import { instrumentOptions, melodyOptions } from './dropdownOptions';
import Popup from '../../../_components/popup/Popup';
import SaveSong from './save-song/SaveSong';

const SongMaker = () => {
  const instruments = useSelector(state => state.instrumentId.instruments);
  const dispatch = useDispatch()
  
  const handleAddInstrument = e => {
    const id = e.currentTarget.id;
    dispatch(addInstrument(id));
  }
  
  const handleSelectInstrument = e => {
    const id = e.currentTarget.id;
    const instrument = e.target.id
    dispatch(selectInstrument({ id, instrument }));
  }

  const savePopup = (
    <Popup
      title='SAVE SONG'
      trigger={<Button colorId={3}>SAVE</Button>}
      popup={<SaveSong />}
    />
  )

  const instrumentDisplay = instruments.map((instrument, i) => (
    !instrument ? (
      <Icon
        icon={addInstrumentIcon}
        text='ADD INSTRUMENT'
        size='69px'
        id={i}
        onClick={handleAddInstrument}
      />
    ) : (
      <div className='SongMaker-options'>
        <Dropdown
          id={i}
          labelText='INSTRUMENT'
          options={instrumentOptions}
          onClick={handleSelectInstrument}
        />
        {instrument.instrument ? (
          <Dropdown
            id={i}
            labelText='MELODY'
            options={melodyOptions}
          />
        ) : null}
      </div>
    )
  ));

  return (
    <div className='SongMaker'>
      <p>HULLO IM SONG MAKER MAKE A SONG PLZ</p>
      <hr/>
      <div className='SongMaker-button-instrument-wrapper'>
        <div className='SongMaker-buttons'>
          <Button colorId={0}>PLAY</Button>
          {savePopup}
        </div>
        <div className='SongMaker-instruments'>
          {instrumentDisplay}
        </div>
      </div>
    </div>
  );
};

export default SongMaker;