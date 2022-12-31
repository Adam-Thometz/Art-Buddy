import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice, generateAnswer, clearChoices } from "_redux/instrument-id/listening-skills/listeningSkillsTestActions";

import './ListeningSkillsTest.css';

import Button from "_components/button/Button";
import Dropdown from "_components/dropdown/Dropdown";
import WindowNavbar from "_components/window-nav/WindowNavbar";
import Choice from "./choice/Choice";
import ReportCardIcon from "./corner-icon/ReportCardIcon";

import instrumentOptions from "./instrumentOptions";
import loadSounds from "_utils/instrument-id/loadSounds";
import { start, Transport } from "tone";
import useReportCard from "_hooks/useReportCard";

const ListeningSkillsTest = () => {
  const { choice1, choice2, answer } = useSelector(state => state.listeningSkillsTest);
  const [playFn, setPlayFn] = useState(null);
  const { volume } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch();
  const { level } = useParams();
  const [, setReportCard] = useReportCard('instrumentId', level);
  
  const setInstruments = e => {
    const id = e.currentTarget.id;
    const choice = e.target.id;
    dispatch(selectChoice({ id, level, choice }));
  };

  useEffect(() => {
    if (choice1 !== null && choice2 !== null) {
      dispatch(generateAnswer({ choice1, choice2 }));
      const ids = [choice1.id, choice2.id]
      setPlayFn(() => loadSounds({ ids, volume, isTest: true }).play);
    };
  }, [dispatch, choice1, choice2, volume]);

  useEffect(() => {
    return () => dispatch(clearChoices());
  }, [dispatch]);
  
  const playSound = async () => {
    if (Transport.state === 'stopped') await start();
    const { id } = answer;
    playFn(id);
  };

  const dropdown = id => <Dropdown
    id={id}
    labelText='CHOOSE FAMILY'
    onClick={setInstruments}
    options={instrumentOptions}
  />;

  const isDisabled = !(choice1 && choice2)

  return (<>
    <WindowNavbar page={`Listening Skills Test: Level ${level}`} cornerIcon={<ReportCardIcon />} />
    <section className="ListeningSkillsTest-game">
      <Button small disabled={isDisabled} colorId={0} onClick={playSound}>START</Button>
      <div className="ListeningSkillsTest-choice-container">
        <div className="ListeningSkillsTest-options">
          {dropdown(1)}
          {level === '1' ? dropdown(2) : null}
        </div>
        <div className="ListeningSkillsTest-choices">
          {choice1 ? <Choice choice={choice1} id='1' level={level} save={setReportCard} /> : null}
          <p>{choice1 && choice2 ? 'OR' : null}</p>
          {choice2 ? <Choice choice={choice2} id='2' level={level} save={setReportCard} /> : null}
        </div>
      </div>
    </section>
  </>);
};

export default ListeningSkillsTest;