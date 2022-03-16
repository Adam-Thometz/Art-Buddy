import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToSequence } from "../../actions";
import soundInfo from "../soundInfo";
import './Options.css';

const Options = () => {
  const dispatch = useDispatch()
  const category = useSelector(state => state.sequenceMaker.category);
  const sequence = useSelector(state => state.sequenceMaker.sequence);
  const options = soundInfo[category];

  const add = e => {
    if (sequence.some(block => !block)) dispatch(addToSequence(e.target.classList[1]));
  }

  return (
    <div className="Options">
      {Object.keys(options).map(option => (
        <div className="Options-option">
          <img className={`Options-img ${option}`} src={options[option].image} alt={options[option].alt} onClick={add} />
          <p className="Options-description">{options[option].alt}</p>
        </div>
      ))}
    </div>
  );
};

export default Options;