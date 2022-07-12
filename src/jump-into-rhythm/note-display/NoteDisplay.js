import React from 'react';

import trebleClef from '_media/jump-into-rhythm/_icons/treble-clef.png';

const NoteDisplay = () => {
  return (
    <div className='NoteDisplay'>
      <img src={trebleClef} alt='Treble clef' />
    </div>
  );
};

export default NoteDisplay;