import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice, generateAnswer } from "../../../../_redux/actions/insturmentIdActions";

import './ListeningLevel.css';

import Choice from "./Choice";
import Button from "../../../../_components/button/Button";
import Dropdown from "../../../../_components/dropdown/Dropdown";
import Options from "../../../../_components/option/Options";

import instrumentOptions from "./instrumentOptions";

const ListeningLevel = () => {
  const { level } = useParams();
  const choice1 = useSelector(state => state.instrumentId.choice1);
  const choice2 = useSelector(state => state.instrumentId.choice2);
  const answer = useSelector(state => state.instrumentId.answer);
  const dispatch = useDispatch();

  const setInstruments = e => {
    const id = e.currentTarget.id;
    const choice = e.target.id;
    dispatch(selectChoice({ id, level, choice }));
    
  };

  useEffect(() => {
    if (choice1 && choice2) dispatch(generateAnswer({ choice1, choice2 }));
  }, [dispatch, choice1, choice2]);

  const dropdown = (id) => <Dropdown
    id={id}
    labelText='CHOOSE FAMILY'
    onClick={setInstruments}
    options={instrumentOptions}
  />;

  const playSound = () => {
    const audio = new Audio(answer.sound);
    audio.play();
  };

  return (
    <div className="ListeningLevel">
      <h2>Level {level}</h2>
      <p>This is instruction text for later</p>
      <hr/>
      <div className="ListeningLevel-game">
        <Button
          small
          disabled={!(choice1 && choice2)}
          otherStyles={{height: '50%', fontSize: '1.5rem'}} 
          colorId={0}
          onClick={playSound}
        >START</Button>
        <div className="ListeningLevel-choice-container">
          <Options>
            {dropdown(1)}
            {level === '1' ? dropdown(2) : null}
          </Options>
          <div className="ListeningLevel-choices">
            {choice1 ? <Choice choice={choice1} /> : null}
            {choice1 && choice2 ? <p>OR</p> : null}
            {choice2 ? <Choice choice={choice2} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningLevel;