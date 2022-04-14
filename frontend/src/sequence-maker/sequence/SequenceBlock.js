import React from "react";

import { useDispatch } from "react-redux";
import { removeFromSequence, setPitch } from "../../_redux/actions/actions";

import './SequenceBlock.css';

import pitches from "../_utils/pitchMap";

const SequenceBlock = ({block}) => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeFromSequence(block.id));
  }
  const changePitch = pitch => {
    dispatch(setPitch(block.id, pitch));
  }
  const play = () => {
    const pitch = pitches[block.pitch];
    if (block.alt !== 'stop') block.sound.triggerAttackRelease(`C${pitch}`, 4);
  }

  return (
    <div className="SequenceBlock">
      {block !== null ? (
        <>
          <img className="SequenceBlock-img" src={block.image} alt={block.alt} onClick={play} />
          <div className="SequenceBlock-controls">
            {block.alt !== 'stop' ?
              <div className="SequenceBlock-set-pitch">
                <p>Current pitch: {block.pitch}</p>
                <button onClick={() => changePitch('low')}>Low</button>
                <button onClick={() => changePitch('medium')}>Medium</button>
                <button onClick={() => changePitch('high')}>High</button>
              </div>
            : null}
            <button className="SequenceBlock-delete" onClick={remove}>X</button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SequenceBlock;