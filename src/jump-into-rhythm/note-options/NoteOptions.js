import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToRhythm, toggleLilyPadDisplay } from '_redux/jump-into-rhythm/jumpIntoRhythmActions';

import './NoteOptions.css';

import Button from '_components/button/Button';
import Icon from '_components/icon/Icon';

import noteInfo from '_data/jump-into-rhythm/noteInfo';

const NoteOptions = () => {
  const { rhythm, isDisplayingLilyPads } = useSelector(state => state.jumpIntoRhythm);
  const dispatch = useDispatch();

  const handleAddNotes = e => {
    const { id } = e.currentTarget;
    const { img, duration } = noteInfo[id];
    dispatch(addToRhythm({ id, img, duration }));
  };

  const notes = Object.keys(noteInfo).map(noteId => {
    const { text, img } = noteInfo[noteId];
    return <Icon icon={img} text={text} size='100px' width='30%' id={noteId} onClick={handleAddNotes} />;
  });

  const play = () => {
    if (rhythm.includes(null)) return;
    dispatch(toggleLilyPadDisplay());
  };

  const back = () => dispatch(toggleLilyPadDisplay());

  return (
    <section className='NoteOptions'>
      <section className='NoteOptions-notes'>
        {notes}
      </section>
      {isDisplayingLilyPads
        ? <Button onClick={back}>BACK</Button>
        : <Button colorId={0} disabled={rhythm.includes(null)} onClick={play}>PLAY</Button>
      }
    </section>
  );
};

export default NoteOptions;