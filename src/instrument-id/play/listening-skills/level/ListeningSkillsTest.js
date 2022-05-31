import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice, generateAnswer, clearChoices } from "../../../../_redux/actions/insturmentIdActions";

import './ListeningSkillsTest.css';

import Choice from "./Choice";
import Button from "../../../../_components/button/Button";
import Dropdown from "../../../../_components/dropdown/Dropdown";

import instrumentOptions from "./instrumentOptions";
import { createBuffers, removeBuffers } from "../../../_utils/buffers";
import { isRhythmicInstrument } from "../../../_utils/getInstrument";
import { playBeat, playScale } from "../../../_utils/play";

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
    if (choice1 !== null && choice2 !== null) {
      dispatch(generateAnswer({ choice1, choice2 }));
      if (process.env.NODE_ENV !== 'test') {
        createBuffers(choice1.id);
        createBuffers(choice2.id);
      }
    };
  }, [dispatch, choice1, choice2]);

  useEffect(() => {
    return () => {
      dispatch(clearChoices());
      removeBuffers();
    };
  }, [dispatch]);
  
  const playSound = () => {
    const { id, sound } = answer;
    isRhythmicInstrument(answer) ? 
      playBeat({id, sound, isTest: true}) :
      playScale({id, isTest: true});
  };

  const dropdown = (id) => (<Dropdown
    id={id}
    labelText='CHOOSE FAMILY'
    onClick={setInstruments}
    options={instrumentOptions}
  />);

  const isDisabled = !(choice1 && choice2)

  return (
    <main className="ListeningSkillsTest">
      <header>
        <h2>LEVEL {level}</h2>
        <p>This is instruction text for later</p>
      </header>
      <hr/>
      <section className="ListeningSkillsTest-game">
        <Button small disabled={isDisabled} colorId={0} onClick={playSound}>START</Button>
        <div className="ListeningSkillsTest-choice-container">
          <div className="ListeningSkillsTest-options">
            {dropdown(1)}
            {level === '1' ? dropdown(2) : null}
          </div>
          <div className="ListeningSkillsTest-choices">
            {choice1 ? <Choice choice={choice1} id='1' level={level} /> : null}
            <p>{choice1 && choice2 ? 'OR' : null}</p>
            {choice2 ? <Choice choice={choice2} id='2' level={level} /> : null}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ListeningSkillsTest;