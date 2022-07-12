import React from 'react';

import Button from '_components/button/Button';
import Icon from '_components/icon/Icon';

import noteInfo from '_helpers/jump-into-rhythm/noteInfo';

import './NoteOptions.css';

const NoteOptions = () => {
  const notes = Object.keys(noteInfo).map(note => {
    const { altText, img, id } = noteInfo[note];
    return <Icon icon={img} text={altText} size='100px' width='5%' id={id} />;
  });

  return (
    <section className='NoteOptions'>
      <section className='NoteOptions-notes'>
        {notes}
      </section>
      <Button colorId={0} otherStyles={{ margin: 0, height: '10vh' }}>PLAY</Button>
    </section>
  );
};

export default NoteOptions;