import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addInstrument, selectInstrument, selectMelody } from '../../../_redux/actions/insturmentIdActions';

import './SongMaker.css';

import Button from '../../../_components/button/Button';
import Dropdown from '../../../_components/dropdown/Dropdown';
import Icon from '../../../_components/icon/Icon';
import Popup from '../../../_components/popup/Popup';
import SaveSong from './save-song/SaveSong';
import SavedSongsIcon from './corner-icon/SavedSongsIcon';
import WindowNavbar from '../../../_components/window-nav/WindowNavbar';

import { addInstrumentIcon } from '../../_icons/iconImports';
import { instrumentOptions, melodyOptions, rhythmOptions } from './dropdownOptions';
import { play } from '../../_utils/play';
import { createBuffers, getBuffers, removeBuffers } from '../../_utils/buffers';

const SongMaker = () => {
  const song = useSelector(state => state.instrumentId.song);
  const dispatch = useDispatch();
  
  const handleAddInstrument = e => {
    const id = e.currentTarget.id;
    dispatch(addInstrument(id));
  };
  
  const handleSelectInstrument = e => {
    const id = +e.currentTarget.id;
    const instrumentId = e.target.id;
    dispatch(selectInstrument({ id, instrumentId }));
    if (process.env.NODE_ENV !== 'test') createBuffers(instrumentId);
  };

  const handleSelectMelody = e => {
    const id = e.currentTarget.id;
    const melodyId = e.target.id;
    dispatch(selectMelody({ id, melodyId }));
  };

  const playInstruments = () => {
    for (let i = 0; i < song.length; i++) {
      const instrument = song[i];
      if (!instrument) continue;
      
      const { instrumentId, melodyId, isRhythm } = instrument;
      if (!melodyId) continue;

      const { buffers } = getBuffers(instrumentId);
      play({ melodyId, buffers, isRhythm });
    };
  };

  useEffect(() => {
    return () => removeBuffers();
  }, []);

  const savePopup = (
    <Popup
      title='SAVE SONG'
      trigger={<Button colorId={3}>SAVE</Button>}
      popup={<SaveSong />}
    />
  );

  const instrumentDisplay = song.map((instrument, i) => {
    if (!instrument) {
      return (
        <Icon key={i} icon={addInstrumentIcon} text='ADD INSTRUMENT' size='69px' id={i} onClick={handleAddInstrument}/>
      );
    } else {
      const instrumentDropdown = (
        <Dropdown
          key={`instrument${i}`}
          id={i}
          labelText='INSTRUMENT'
          options={instrumentOptions}
          onClick={handleSelectInstrument}
        />
      );
      const melodyDropdown = (
        !instrument || !instrument.instrumentId) ? null : (
        <Dropdown
          key={`melody${i}`}
          id={i}
          labelText={instrument.isRhythm ? 'RHYTHM' : 'MELODY'}
          options={instrument.isRhythm ? rhythmOptions : melodyOptions}
          onClick={handleSelectMelody}
        />
      );
      return (
        <div className='SongMaker-options'>
          {instrumentDropdown}
          {melodyDropdown}
        </div>
      );
    };
  });

  return (
    <main className='SongMaker'>
      <WindowNavbar page='Song Maker' cornerIcon={<SavedSongsIcon />} />
      <header>
        <p>HULLO IM SONG MAKER MAKE A SONG PLZ</p>
      </header>
      <hr/>
      <section className='SongMaker-button-instrument-wrapper'>
        <div className='SongMaker-buttons'>
          <Button colorId={0} onClick={playInstruments}>PLAY</Button>
          {savePopup}
        </div>
        <div className='SongMaker-instruments'>
          {instrumentDisplay}
        </div>
      </section>
    </main>
  );
};

export default SongMaker;