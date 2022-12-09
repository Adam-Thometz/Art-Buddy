import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToRhythm, toggleAnimation, toggleLilyPadDisplay } from '_redux/jump-into-rhythm/jumpIntoRhythmActions';

import './NoteOptions.css';

import Button from '_components/button/Button';
import Icon from '_components/icon/Icon';

import noteInfo from '_data/jump-into-rhythm/noteInfo';
import hop from '_utils/jump-into-rhythm/hop';
import { start, Transport, Time } from 'tone';

const NoteOptions = () => {
  const { rhythm, isDisplayingLilyPads } = useSelector(state => state.jumpIntoRhythm);
  const { volume } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch();

  const handleAddNotes = e => {
    const { id } = e.currentTarget;
    const { img, duration, isRest } = noteInfo[id];
    dispatch(addToRhythm({ id, img, duration, isRest }));
  };

  const notes = Object.keys(noteInfo).map(noteId => {
    const { text, img } = noteInfo[noteId];
    const width = text === 'Eighth Notes' ? '50%' : '25%'
    return <Icon icon={img} text={text} size='100px' width={width} id={noteId} onClick={handleAddNotes} />;
  });

  const handleHop = async () => {
    if (Transport.state === 'stopped') await start();
    dispatch(toggleAnimation());
    dispatch(toggleLilyPadDisplay());
    const beats = rhythm.map(note => ({
      duration: note.duration,
      isRest: note.isRest
    }));
    hop({ beats, volume });
    setTimeout(() => {
      console.log('stopping');
      Transport.stop();
    }, Time(`${rhythm.length/4}:1`).toSeconds() * 1000)
  };

  const back = () => {
    dispatch(toggleLilyPadDisplay());
    dispatch(toggleAnimation());
    Transport.stop();
  };

  return (
    <section className='NoteOptions'>
      <section className='NoteOptions-notes'>
        {notes}
      </section>
      {isDisplayingLilyPads
        ? <Button onClick={back}>BACK</Button>
        : <Button colorId={0} disabled={rhythm.includes(null)} onClick={handleHop}>PLAY</Button>
      }
    </section>
  );
};

export default NoteOptions;