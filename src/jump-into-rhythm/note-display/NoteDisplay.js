import React from 'react';

import './NoteDisplay.css';

import NoteBlock from './note-block/NoteBlock';

import colors from '_helpers/_utils/colorOrder';
import trebleClef from '_media/jump-into-rhythm/_icons/treble-clef.png';

const NoteDisplay = () => {
  return (
    <main className='NoteDisplay'>
      <img src={trebleClef} alt='Treble clef' />
      <section className='NoteDisplay-blocks'>
        <NoteBlock borderColor={colors[2]} />
        <NoteBlock borderColor={colors[1]} />
        <NoteBlock borderColor={colors[0]} />
        <NoteBlock borderColor={colors[4]} />
      </section>
    </main>
  );
};

export default NoteDisplay;