import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeFromSequence, togglePlaying } from "_redux/sequence-maker/sequenceMakerActions";

import './SequenceBlock.css';

import Button from "_components/button/Button";

import { playOne } from "_helpers/sequence-maker/playSequence";

const SequenceBlock = ({ id, block, borderColor }) => {
  const { pitch, duration } = useSelector(state => state.sequenceMaker);
  const { volume } = useSelector(state => state.mainSettings)
  const dispatch = useDispatch();
  
  const remove = e => {
    const id = +e.target.parentElement.id;
    dispatch(removeFromSequence(id));
  };

  const play = () => {
    const { soundId } = block
    playOne({ soundId, pitch, duration, volume });
    dispatch(togglePlaying(id));
    const timer = setTimeout(() => {
      dispatch(togglePlaying(id));
      clearTimeout(timer);
    }, duration * 1000);
  };

  const playing = (block && block.isPlaying) ? ' playing' : '';

  return (
    <figure className={`SequenceBlock${playing}`} style={{borderColor}} id={id}>
      {block !== null ? (
        <>
          <img className="SequenceBlock-img" src={block.image} alt={block.alt} onClick={play} />
          <Button small colorId={2} onClick={remove}>REMOVE</Button>
        </>
      ) : null}
    </figure>
  );
};

export default SequenceBlock;