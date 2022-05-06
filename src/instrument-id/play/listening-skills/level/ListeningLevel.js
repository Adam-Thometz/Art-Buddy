import React from "react";
import { useParams } from "react-router-dom";

import './ListeningLevel.css';

import Button from "../../../../_components/button/Button";
import Dropdown from "../../../../_components/dropdown/Dropdown";

import learnInstrumentOptions from "../../../learnInstrumentOptions";

const ListeningLevel = () => {
  const { level } = useParams();

  const options = Object.keys(learnInstrumentOptions).map(option => option.toUpperCase())
  return (
    <div className="ListeningLevel">
      <h2>Level {level}</h2>
      <p>This is instruction text for later</p>
      <hr/>
      <div className="ListeningLevel-game">
        <Button small colorId={0}>START</Button>
        <Dropdown
          labelText='CHOOSE FAMILY'
          options={options}
        />
        {level === '1' ? (
          <>
            <p>OR</p>
            <Dropdown
              labelText='CHOOSE FAMILY'
              options={options}
            />
          </>)
        : null}
      </div>
    </div>
  );
};

export default ListeningLevel;