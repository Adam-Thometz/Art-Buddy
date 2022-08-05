import React, { useState } from "react";
import useReportCard from "_hooks/useReportCard";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice } from "_redux/instrument-id/insturmentIdActions";

import './Choice.css';

import Icon from "_components/icon/Icon";

import { correctIcon, incorrectIcon, swap } from "_media/instrument-id/_icons/iconImports";

const Choice = ({ id, level, choice }) => {
  const { answer } = useSelector(state => state.instrumentId);
  const [isCorrect, setIsCorrect] = useState(null);
  const [savedReportCard, setSavedReportCard] = useReportCard(level);
  const dispatch = useDispatch();

  const checkAnswer = () => {
    const result = choice.name === answer.name ? true : false;
    setIsCorrect(result);
    if (result) {
      const alreadyGot = savedReportCard[choice.family].includes(choice.name);
      if (!alreadyGot) {
        const newReportCard = { 
          ...savedReportCard,
          [choice.family]: [...savedReportCard[choice.family], choice.name]
        };
        setSavedReportCard(JSON.stringify(newReportCard));
      };
    };
    const timer = setTimeout(() => {
      if (choice.name === answer.name) {
        dispatch(selectChoice({ id, level, choice: choice.family }));
      };
      setIsCorrect(null);
      clearTimeout(timer);
    }, 2000);
  };

  const swapInstrument = () => dispatch(selectChoice({ id, level, choice: choice.family }));  

  const isCorrectClass = isCorrect !== null
    ? (isCorrect ? ' correct' : ' incorrect')
    : '';

  const isCorrectWrapper = isCorrect !== null ? (
    isCorrect ?
      <Icon size="150px" icon={correctIcon} text='CORRECT' /> :
      <Icon size="150px" icon={incorrectIcon} text='INCORRECT' />
  ) : null

  return (
    <div className='Choice'>
      <div className={`Choice-wrapper${isCorrectClass}`} data-testid='isCorrect'>
        {isCorrectWrapper}
      </div>
      <Icon icon={choice.icon} text={choice.name} onClick={checkAnswer} />
      <Icon icon={swap} text='SWAP' size="30px" onClick={swapInstrument} otherImgStyles={{ marginTop: '24px' }} />
    </div>
  );
};

export default Choice;