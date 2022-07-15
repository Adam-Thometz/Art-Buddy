import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '_components/button/Button';
import Icon from '_components/icon/Icon';

import noteInfo from '_data/jump-into-rhythm/noteInfo';
import { addToRhythm } from '_redux/jump-into-rhythm/jumpIntoRhythmActions';

import './NoteOptions.css';

const NoteOptions = () => {
  const dispatch = useDispatch();

  const handleAddNotes = e => {
    const { id } = e.currentTarget;
    const { img, duration } = noteInfo[id];
    dispatch(addToRhythm({ id, img, duration }));
  }

  const notes = Object.keys(noteInfo).map(noteId => {
    const { text, img } = noteInfo[noteId];
    return <Icon icon={img} text={text} size='100px' width='30%' id={noteId} onClick={handleAddNotes} />;
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