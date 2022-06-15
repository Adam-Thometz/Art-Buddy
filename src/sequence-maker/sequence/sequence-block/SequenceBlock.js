import React, { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeFromSequence, togglePlaying } from "../../../_redux/actions/sequenceMakerActions";

import './SequenceBlock.css';

import Button from "../../../_components/button/Button";

import { playOne } from "../../_utils/playSequence";

const SequenceBlock = ({ id, block, borderColor }) => {
  const { pitch, duration } = useSelector(state => state.sequenceMaker);
  const dispatch = useDispatch();
  
  const remove = e => {
    const id = +e.target.parentElement.id;
    dispatch(removeFromSequence(id));
  };

  const play = () => {
    playOne({ soundId: block.soundId, pitch, duration });
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
        <Fragment>
          <img className="SequenceBlock-img" src={block.image} alt={block.alt} onClick={play} />
          <Button small colorId={2} onClick={remove}>REMOVE</Button>
        </Fragment>
      ) : null}
    </figure>
  );
};

export default SequenceBlock;