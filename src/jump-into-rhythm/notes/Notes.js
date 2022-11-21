import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleHasExtraMeasure } from '_redux/jump-into-rhythm/jumpIntoRhythmActions';

import './Notes.css';

import NoteBlock from './note-block/NoteBlock';

import trebleClef from '_media/jump-into-rhythm/_icons/treble-clef.png';
import plus from '_media/general-icons/add.png';
import minus from '_media/general-icons/minus.png';
import colors from '_data/_utils/colorOrder';

const Notes = () => {
  const { rhythm } = useSelector(state => state.jumpIntoRhythm);
  const dispatch = useDispatch();

  const handleToggleMeasures = () => dispatch(toggleHasExtraMeasure(rhythm.length === 4));

  const colorOrder = [2, 1, 0, 4];
  
  return (
    <div className='Notes'>
      <div className='Notes-measure'>
        <img src={trebleClef} alt='Treble clef' />
        <section className='Notes-beats'>
          {rhythm.slice(0, 4).map((note, i) => (
            <NoteBlock borderColor={colors[colorOrder[i]]} note={note} id={i} />
          ))}
        </section>
      </div>
      <div className='Notes-measure'>
        <img src={rhythm.length === 8 ? minus : plus} className='Notes-toggle' alt='Add measure' onClick={handleToggleMeasures} />
        <section className='Notes-beats'>
          {rhythm.length === 8 ? rhythm.slice(4).map((note, i) => (
            <NoteBlock borderColor={colors[colorOrder[i]]} note={note} id={i+4} />
          )) : null}
        </section>
      </div>
    </div>
  );
};

export default Notes;