import React from 'react';

import { useSelector } from 'react-redux';

import './NoteDisplay.css';

import NoteBlock from './note-block/NoteBlock';

import colors from '_data/_utils/colorOrder';
import trebleClef from '_media/jump-into-rhythm/_icons/treble-clef.png';

const NoteDisplay = () => {
  const { rhythm } = useSelector(state => state.jumpIntoRhythm);

  return (
    <section className='NoteDisplay'>
      <img src={trebleClef} alt='Treble clef' />
      <section className='NoteDisplay-blocks'>
        <NoteBlock borderColor={colors[2]} notes={rhythm[0]} />
        <NoteBlock borderColor={colors[1]} notes={rhythm[1]} />
        <NoteBlock borderColor={colors[0]} notes={rhythm[2]} />
        <NoteBlock borderColor={colors[4]} notes={rhythm[3]} />
      </section>
    </section>
  );
};

export default NoteDisplay;