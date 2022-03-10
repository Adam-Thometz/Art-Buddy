import React from "react";
import { useSelector } from "react-redux";
import soundInfo from "../soundInfo";
import './Options.css';

const Options = () => {
  const category = useSelector(state => state.sequenceMaker.category);
  const options = soundInfo[category];
  return (
    <div className="Options">
      {Object.keys(options).map(option => (
        <div className="Options-option">
          <img className="Options-img" src={options[option].image} alt={options[option].alt} />
          <p className="Options-description">{options[option].alt}</p>
        </div>
      ))}
    </div>
  );
};

export default Options;