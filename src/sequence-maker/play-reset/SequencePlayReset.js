import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { resetSequence, togglePlaying } from "_redux/sequence-maker/sequenceMakerActions";

import './SequencePlayReset.css';

import Icon from "_components/icon/Icon";

import { playSequence } from "_utils/sequence-maker/playSequence";
import play from '_media/sequence-maker/_icons/play.png';
import playAll from '_media/sequence-maker/_icons/play-all.png';
import reset from '_media/sequence-maker/_icons/reset.png';
import { start, Transport } from 'tone';

const SequencePlayReset = () => {
  const {
    sequence,
    pitch,
    duration
  } = useSelector(state => state.sequenceMaker);
  const { volume } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch(); 

  const handlePlay = async () => {
    if (Transport.state === 'stopped') await start();
    const isPlaying = sequence
      .filter(block => block !== null)
      .some(block => block.isPlaying)
    if (isPlaying) return;

    for (let i = 0; i < sequence.length; i++) {
      if (!sequence[i]) continue;
      const start = setTimeout(() => {
        dispatch(togglePlaying(i));
        clearTimeout(start);
      }, (duration * 1000) * i);
      const end = setTimeout(() => {
        dispatch(togglePlaying(i));
        clearTimeout(end);
      }, (duration * 1000) + ((duration * 1000) * i));
    };
    playSequence({ sequence, pitch, duration, volume, playAll: false });
  };
  
  const handlePlayAll = async () => {
    if (Transport.state === 'stopped') await start();
    const isPlaying = sequence
      .filter(block => block !== null)
      .some(block => block.isPlaying)
    if (isPlaying) return;

    for (let i = 0; i < sequence.length; i++) {
      if (!sequence[i]) continue;
      dispatch(togglePlaying(i));
      const timer = setTimeout(() => {
        dispatch(togglePlaying(i));
        clearTimeout(timer);
      }, duration * 1000);
    };
    playSequence({ sequence, pitch, duration, volume, playAll: true });
  };

  const handleReset = () => {
    dispatch(resetSequence());
    Transport.stop();
  };
  
  return (
    <section className='SequencePlayReset'>
      <aside className="SequencePlayReset-play">
        <Icon icon={play} text='Play' size='48px' onClick={handlePlay} />
        <Icon icon={playAll} text='Play All' size='48px' onClick={handlePlayAll} />
      </aside>
      <aside className="SequencePlayReset-reset">
        <Icon icon={reset} text='Reset Sequence' size="48px" onClick={handleReset} />
      </aside>
    </section>
  );
};

export default SequencePlayReset;