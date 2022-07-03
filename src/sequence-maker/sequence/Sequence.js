import React from "react";

import { resetSequence, togglePlaying } from "_redux/actions/sequenceMakerActions";
import { playSequence } from "../_utils/playSequence";
import { useSelector, useDispatch } from "react-redux";

import './Sequence.css';

import SequenceBlock from "./sequence-block/SequenceBlock";
import Icon from "_components/icon/Icon";

import colors from "_components/button/colorOrder";
import play from '../_media/_icons/play.png';
import playAll from '../_media/_icons/play-all.png';

const Sequence = () => {
  const {
    sequence,
    pitch,
    duration
  } = useSelector(state => state.sequenceMaker);
  const { volume } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch(); 

  const handlePlay = () => {
    playSequence({ sequence, pitch, duration, volume, playAll: false });
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
  };
  
  const handlePlayAll = () => {
    playSequence({ sequence, pitch, duration, volume, playAll: true });
    for (let i = 0; i < sequence.length; i++) {
      if (!sequence[i]) continue;
      dispatch(togglePlaying(i));
      const timer = setTimeout(() => {
        dispatch(togglePlaying(i));
        clearTimeout(timer);
      }, duration * 1000);
    };
  };

  const handleReset = () => dispatch(resetSequence());

  return (
    <section className="Sequence">
      <aside className="Sequence-play-options">
        <Icon icon={play} text='Play' size='48px' onClick={handlePlay} />
        <Icon icon={playAll} text='Play All' size='48px' onClick={handlePlayAll} />
      </aside>
      <section className="Sequence-display">
        {sequence.map((block, i) => (
          <SequenceBlock key={i} id={i} block={block} borderColor={colors[i%4]} />
        ))}
      </section>
      <aside className="Sequence-reset">
        <Icon text='Reset Sequence' size="48px" onClick={handleReset} />
      </aside>
    </section>
  );
};

export default Sequence;