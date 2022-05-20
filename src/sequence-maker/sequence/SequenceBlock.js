import React, { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeFromSequence, setPitch } from "../../_redux/actions/sequenceMakerActions";

import './SequenceBlock.css';

import Button from "../../_components/button/Button";

import sample from "../../_utils/sample";

const SequenceBlock = ({ block, borderColor }) => {
  const pitch = useSelector(state => state.sequenceMaker.pitch)
  const dispatch = useDispatch();
  
  const remove = () => {
    dispatch(removeFromSequence(block.id));
  }
  // const changePitch = pitch => {
  //   const id = block.id
  //   dispatch(setPitch({id, pitch}));
  // }

  const play = () => {
    if (block.alt === 'stop') return;
    const buffer = window[`${block.id}Buffer`];
    const sound = sample(buffer);
    sound.triggerAttackRelease(`C${pitch}`, 4);
  }

  return (
    <div className="SequenceBlock" style={{borderColor}}>
      {block !== null ? (
        <Fragment>
          <img className="SequenceBlock-img" src={block.image} alt={block.alt} onClick={play} />
          <div className="SequenceBlock-controls">
            <Button small colorId={2} onClick={remove}>REMOVE</Button>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default SequenceBlock;