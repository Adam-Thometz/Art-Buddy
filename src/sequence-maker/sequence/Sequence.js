import React, { useContext } from "react";
import { PlayContext } from "_utils/_general/PlayContext";

import { useSelector, useDispatch } from "react-redux";
import { removeFromSequence, togglePlaying } from "_redux/sequence-maker/sequenceMakerActions";

import './Sequence.css';

import Button from "_components/button/Button";

import colors from "_data/_utils/colorOrder";

const Sequence = () => {
  const { sequence, pitch, duration, isPlaying } = useSelector(state => state.sequenceMaker);
  const { playFn } = useContext(PlayContext);
  const dispatch = useDispatch();
  
  const remove = e => {
    const id = +e.target.parentElement.id;
    dispatch(removeFromSequence(id));
  };

  const play = e => {
    if (isPlaying) return;
    const id = +e.target.parentElement.id;
    dispatch(togglePlaying(id));
    const timer = setTimeout(() => {
      dispatch(togglePlaying(id));
      clearTimeout(timer);
    }, duration * 1000);
    playFn.playOne({ id, pitch, duration });
  };

  return (
    <section className="Sequence">
      {sequence.map((block, i) => (
        <figure
          className={`Sequence-block${block && block.isPlaying ? ' playing' : ''}`}
          style={{ borderColor: colors[i%4] }}
          id={i}
        >
          {block !== null ? (<>
            <Button small colorId={2} onClick={remove}>X</Button>
            <img className="Sequence-block-img" src={block.image} alt={block.alt} onClick={play} />
          </>) : null}
        </figure>
      ))}
    </section>
  );
};

export default Sequence;