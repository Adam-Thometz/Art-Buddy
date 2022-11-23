import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice } from "_redux/instrument-id/instrumentIdActions";

import './Choice.css';

import Icon from "_components/icon/Icon";

import { correctIcon, incorrectIcon, swap } from "_media/instrument-id/_icons/iconImports";
import updateReportCard from "_helpers/instrument-id/updateReportCard";

const Choice = ({ id, level, choice, save }) => {
  const { answer } = useSelector(state => state.instrumentId);
  const [isCorrect, setIsCorrect] = useState(null);
  const dispatch = useDispatch();

  const checkAnswer = () => {
    const { name, family } = choice;
    const result = name === answer.name;
    setIsCorrect(result);

    if (result) {
      save(reportCard => {
        const updatedGrade = updateReportCard({ group: reportCard[family], name });
        return { ...reportCard, [family]: updatedGrade }; 
      });
    };

    const timer = setTimeout(() => {
      if (result) dispatch(selectChoice({ id, level, choice: family }));
      setIsCorrect(null);
      clearTimeout(timer);
    }, 2000);
  };

  const swapInstrument = () => dispatch(selectChoice({ id, level, choice: choice.family }));  

  const isCorrectClass = isCorrect !== null
    ? (isCorrect
      ? ' correct'
      : ' incorrect'
    ) : '';

  const isCorrectWrapper = isCorrect !== null
    ? (isCorrect
      ? <Icon size="150px" icon={correctIcon} text='CORRECT' />
      : <Icon size="150px" icon={incorrectIcon} text='INCORRECT' />
    ) : null;

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