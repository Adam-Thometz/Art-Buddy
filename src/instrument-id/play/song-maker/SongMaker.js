import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addInstrument, selectInstrument, selectMelody } from '../../../_redux/actions/insturmentIdActions';

import './SongMaker.css';

import Button from '../../../_components/button/Button';
import Dropdown from '../../../_components/dropdown/Dropdown';
import Icon from '../../../_components/icon/Icon';
import Popup from '../../../_components/popup/Popup';
import SaveSong from './save-song/SaveSong';

import { addInstrumentIcon } from '../../_icons/iconImports';
import { instrumentOptions, melodyOptions } from './dropdownOptions';
import { Buffer } from 'tone';
import * as sounds from '../../_sounds/soundImports';
import { isRhythmicInstrument, playMelody, playRhythm } from '../../_utils/play';
import getInstrument from '../../_utils/getInstrument';

const SongMaker = () => {
  const instrumentsToPlay = useSelector(state => state.instrumentId.instruments);
  const dispatch = useDispatch()
  
  const handleAddInstrument = e => {
    const id = e.currentTarget.id;
    dispatch(addInstrument(id));
  }
  
  const handleSelectInstrument = e => {
    const id = +e.currentTarget.id;
    const instrumentId = e.target.id;
    const instrumentName = e.target.innerText;
    dispatch(selectInstrument({ id, instrumentId, instrumentName }));
    if (isRhythmicInstrument(instrumentName)) {
      const percussion = getInstrument(instrumentName);
      const sounds = Object.keys(percussion.sound);
      for (let i = 1; i <= sounds.length; i++) {
        const currBufferId = `${instrumentId}Buffer${i}`;
        const sound = percussion.sound[sounds[i]];
        window[currBufferId] = new Buffer(sound);
      }
    } else {
      const currBufferId = `${instrumentId}Buffer`;
      window[currBufferId] = new Buffer(sounds[instrumentId]);
    }
  }

  const handleSelectMelody = e => {
    const id = e.currentTarget.id;
    const melodyId = e.target.id;
    dispatch(selectMelody({ id, melodyId }));
  };

  const playInstruments = () => {
    for (let i = 0; i < instrumentsToPlay.length; i++) {
      const instrument = instrumentsToPlay[i];
      if (!instrument) continue;
      
      const { instrumentId, instrumentName, melody } = instrument;

      if (isRhythmicInstrument(instrumentName)) {
        const percussion = getInstrument(instrumentName);
        const sounds = Object.keys(percussion.sound);
        const buffers = []
        for (let i = 1; i < sounds.length; i++) {
          const currBufferId = `${instrumentId}Buffer${i}`;
          const buffer = window[currBufferId];
          buffers.push(buffer);
        };
        playRhythm(melody, buffers);
      } else {
        const currBuffer = `${instrumentId}Buffer`;
        const buffer = window[currBuffer];
        playMelody(melody, buffer);
      }
    }
  }

  const savePopup = (
    <Popup
      title='SAVE SONG'
      trigger={<Button colorId={3}>SAVE</Button>}
      popup={<SaveSong />}
    />
  );

  const instrumentDisplay = instrumentsToPlay.map((instrument, i) => (
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
        {instrument.instrumentId ? (
          <Dropdown
            id={i}
            labelText='MELODY'
            options={melodyOptions}
            onClick={handleSelectMelody}
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
          <Button colorId={0} onClick={playInstruments}>PLAY</Button>
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