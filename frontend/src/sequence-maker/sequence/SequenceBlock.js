import React, { Fragment } from "react";

import { useDispatch } from "react-redux";
import { removeFromSequence, setPitch } from "../../_redux/actions/actions";

import './SequenceBlock.css';

import Button from "../../_components/button/Button";
import Options from "../../_components/option/Options";

import pitches from "../_utils/pitchMap";

const SequenceBlock = ({ block, borderColor }) => {
  const dispatch = useDispatch();
  
  const remove = () => {
    dispatch(removeFromSequence(block.id));
  }
  const changePitch = pitch => {
    dispatch(setPitch(block.id, pitch));
  }
  const isPitch = pitch => block.pitch === pitch;
  const play = () => {
    const pitch = pitches[block.pitch];
    if (block.alt !== 'stop') block.sound.triggerAttackRelease(`C${pitch}`, 4);
  }

  return (
    <div className="SequenceBlock" style={{borderColor}}>
      {block !== null ? (
        <Fragment>
          <p>{block.alt}</p>
          <img className="SequenceBlock-img" src={block.image} alt={block.alt} onClick={play} />
          <div className="SequenceBlock-controls">
            {block.alt !== 'stop' ?
              <Options>
                {Object.keys(pitches).map(pitch => (
                  <Button
                    small
                    selected={isPitch(pitch)}
                    colorId={3}
                    onClick={() => changePitch(pitch)} 
                  >
                    {pitch.toUpperCase()}
                  </Button>
                ))}
              </Options>
            : null}
            <Button small colorId={2} onClick={remove}>REMOVE</Button>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default SequenceBlock;