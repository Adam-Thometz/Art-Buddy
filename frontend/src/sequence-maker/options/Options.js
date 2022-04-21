import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToSequence, addBlock, removeBlock } from "../../_redux/actions/actions";

import './Options.css';

import Button from "../../_components/button/Button";

import colors from "../../_components/button/colorOrder";
import soundInfo from "../_media/soundInfo";

const Options = () => {
  const dispatch = useDispatch()
  const category = useSelector(state => state.sequenceMaker.category);
  const sequence = useSelector(state => state.sequenceMaker.sequence);
  const options = soundInfo[category];

  const addOption = e => {
    if (sequence.some(block => !block)) dispatch(addToSequence(e.target.classList[1]));
  }

  const add = () => {
    dispatch(addBlock());
  }
  
  const remove = () => {
    dispatch(removeBlock());
  }

  return (
    <div className="Options">
      <Button small borderColor={colors[2]} onClick={remove}>REMOVE BLOCK</Button>
      {Object.keys(options).map(option => (
        <div className="Options-option">
          <img className={`Options-img ${option}`} src={options[option].image} alt={options[option].alt} onClick={addOption} />
          <p className="Options-description">{options[option].alt}</p>
        </div>
      ))}
      <Button small borderColor={colors[3]} onClick={add}>ADD BLOCK</Button>
    </div>
  );
};

export default Options;