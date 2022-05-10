import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice, generateAnswer, clearChoices } from "../../../../_redux/actions/insturmentIdActions";

import './ListeningSkillsTest.css';

import Choice from "./Choice";
import Button from "../../../../_components/button/Button";
import Dropdown from "../../../../_components/dropdown/Dropdown";

import instrumentOptions from "./instrumentOptions";

const ListeningSkillsTest = () => {
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

  useEffect(() => {
    return () => {
      dispatch(clearChoices());
    }
  }, [dispatch]);
  
  const playSound = () => {
    const audio = new Audio(answer.sound);
    audio.play();
  };

  const dropdown = (id) => <Dropdown
    id={id}
    labelText='CHOOSE FAMILY'
    onClick={setInstruments}
    options={instrumentOptions}
  />;

  return (
    <div className="ListeningSkillsTest">
      <h2>LEVEL {level}</h2>
      <p>This is instruction text for later</p>
      <hr/>
      <div className="ListeningSkillsTest-game">
        <Button
          small
          disabled={!(choice1 && choice2)}
          otherStyles={{height: '50%', fontSize: '1.5rem'}} 
          colorId={0}
          onClick={playSound}
        >START</Button>
        <div className="ListeningSkillsTest-choice-container">
          <div className="ListeningSkillsTest-options">
            {dropdown(1)}
            {level === '1' ? dropdown(2) : null}
          </div>
          <div className="ListeningSkillsTest-choices">
            <div className="ListeningSkillsTest-choice-wrapper" id="1">
              {choice1 ? <Choice choice={choice1} id='1' level={level} /> : null}
            </div>
            <p>{choice1 && choice2 ? 'OR' : null}</p>
            <div className="ListeningSkillsTest-choice-wrapper" id="2">
              {choice2 ? <Choice choice={choice2} id='2' level={level} /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningSkillsTest;