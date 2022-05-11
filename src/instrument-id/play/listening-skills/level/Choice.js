import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice, updateReportCard } from "../../../../_redux/actions/insturmentIdActions";

import './Choice.css';

import Icon from "../../../../_components/icon/Icon";

import { correctIcon, incorrectIcon } from "../../../_icons/iconImports";

const Choice = ({ id, level, choice, setReportCard }) => {
  const answer = useSelector(state => state.instrumentId.answer);
  const [isCorrect, setIsCorrect] = useState(null);
  const reportCard = useSelector(state => state.instrumentId[`reportCard${level}`]);
  const dispatch = useDispatch();

  const checkAnswer = () => {
    const result = choice.name === answer.name ? true : false;
    setIsCorrect(result);
    if (result) {
      const alreadyGot = reportCard[choice.family].includes(choice.name);
      if (!alreadyGot) {
        const newReportCard = { 
          ...reportCard,
          [choice.family]: [...reportCard[choice.family], choice.name]
        };
        console.log(newReportCard)
        dispatch(updateReportCard({ level, newReportCard }));
        setReportCard(JSON.stringify(newReportCard));
      }
    }
    const timer = setTimeout(() => {
      if (choice.name === answer.name) {
        dispatch(selectChoice({ id, level, choice: choice.family }));
      }
      setIsCorrect(null);
      clearTimeout(timer);
    }, 2000);
  };

  const swapInstrument = () => {
    dispatch(selectChoice({ id, level, choice: choice.family }));
  }

  const isCorrectClass = isCorrect !== null
    ? (isCorrect ? ' correct' : ' incorrect')
    : '';

  return (
    <div className={`Choice`}>
      <div className={`Choice-wrapper${isCorrectClass}`}>
        {isCorrect !== null ? (
          isCorrect ? 
            <Icon size="150px" icon={correctIcon} text='CORRECT' /> :
            <Icon size="150px" icon={incorrectIcon} text='INCORRECT' />
        ) : null}
      </div>
      <Icon icon={choice.icon} text={choice.name} onClick={checkAnswer} />
      <Icon text='SWAP' size="30px" onClick={swapInstrument}/>
    </div>
  );
};

export default Choice;