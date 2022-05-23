import React from "react";

import { resetSequence } from "../../_redux/actions/sequenceMakerActions";
import { playSequence } from "../_utils/playSequence";
import { useSelector, useDispatch } from "react-redux";

import './Sequence.css';

import SequenceBlock from "./SequenceBlock";
import Icon from "../../_components/icon/Icon";

import colors from "../../_components/button/colorOrder";
import play from '../_media/_icons/play.png'
import playAll from '../_media/_icons/play-all.png'

const Sequence = () => {
  const sequence = useSelector(state => state.sequenceMaker.sequence);
  const pitch = useSelector(state => state.sequenceMaker.pitch);
  const duration = useSelector(state => state.sequenceMaker.duration);
  const dispatch = useDispatch(); 

  const handlePlay = () => {
    playSequence({ sequence, pitch, duration, playAll: false })
  }
  
  const handlePlayAll = () => {
    playSequence({ sequence, pitch, duration, playAll: true })
  }

  const handleReset = () => {
    dispatch(resetSequence());
  }

  return (
    <div className="Sequence">
      <div className="Sequence-play-options">
        <Icon icon={play} text='Play' size='48px' onClick={handlePlay} />
        <Icon icon={playAll} text='Play All' size='48px' onClick={handlePlayAll} />
      </div>
      <div className="Sequence-display">
        {sequence.map((block, i) => (
          <SequenceBlock id={i} block={block} borderColor={colors[i%4]} />
        ))}
      </div>
      <div className="Sequence-reset">
        <Icon text='Reset Sequence' size="48px" onClick={handleReset} />
      </div>
    </div>
  );
};

export default Sequence;