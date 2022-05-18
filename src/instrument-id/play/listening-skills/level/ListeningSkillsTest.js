import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useReportCard from "../../../../_hooks/useReportCard";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice, generateAnswer, clearChoices } from "../../../../_redux/actions/insturmentIdActions";

import './ListeningSkillsTest.css';

import Choice from "./Choice";
import Button from "../../../../_components/button/Button";
import Dropdown from "../../../../_components/dropdown/Dropdown";

import instrumentOptions from "./instrumentOptions";
import { createBuffers } from "../../../_utils/buffers";
import { isRhythmicInstrument } from "../../../_utils/getInstrument";
import { playBeat, playScale } from "../../../_utils/play";

const ListeningSkillsTest = () => {
  const { level } = useParams();
  const choice1 = useSelector(state => state.instrumentId.choice1);
  const choice2 = useSelector(state => state.instrumentId.choice2);
  const answer = useSelector(state => state.instrumentId.answer);
  const [savedReportCard, setSavedReportCard] = useReportCard(`instrument-id-level-${level}-report-card`);
  const dispatch = useDispatch();

  const setInstruments = e => {
    const id = e.currentTarget.id;
    const choice = e.target.id;
    dispatch(selectChoice({ id, level, choice }));
  };

  useEffect(() => {
    if (choice1 && choice2) {
      dispatch(generateAnswer({ choice1, choice2 }));
      createBuffers(choice1.id);
      createBuffers(choice2.id);
    };
  }, [dispatch, choice1, choice2]);

  useEffect(() => {
    return () => dispatch(clearChoices());
  }, [dispatch]);
  
  const playSound = () => {
    const { id, sound } = answer;
    if (isRhythmicInstrument(answer)) {
      playBeat(id, sound);
    } else {
      playScale(id);
    };
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
            {choice1 ? <Choice choice={choice1} id='1' level={level} setReportCard={setSavedReportCard} /> : null}
            <p>{choice1 && choice2 ? 'OR' : null}</p>
            {choice2 ? <Choice choice={choice2} id='2' level={level} setReportCard={setSavedReportCard} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningSkillsTest;