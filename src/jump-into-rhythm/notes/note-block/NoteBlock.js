import React from 'react';

import './NoteBlock.css';

const NoteBlock = ({ borderColor, notes }) => {
  return (
    <div className='NoteBlock' style={{ borderColor }}>
      {notes ? <img src={notes.img} alt='' /> : null}
    </div>
  );
};

export default NoteBlock;