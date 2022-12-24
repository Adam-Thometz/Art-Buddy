import React, { useState } from "react";
import useReportCard from "_hooks/useReportCard";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice } from "_redux/instrument-id/listening-skills/idListeningSkillsActions";

import './Choice.css';

import Icon from "_components/icon/Icon";

import { correctIcon, incorrectIcon, swap } from "_media/instrument-id/_icons/iconImports";
import updateReportCard from "_utils/instrument-id/updateReportCard";

const Choice = ({ id, level, choice }) => {
  const { answer } = useSelector(state => state.listeningSkillsTest);
  const [isCorrect, setIsCorrect] = useState(null);
  const dispatch = useDispatch();
  const [, setReportCard] = useReportCard('instrumentId', level)

  const checkAnswer = () => {
    const { name, family } = choice;
    const result = name === answer.name;
    setIsCorrect(result);

    if (result) {
      setReportCard(reportCard => {
        const updatedGrade = updateReportCard({ group: reportCard[family].results, name });
        return {
          ...reportCard,
          [family]: { 
            ...reportCard[family],
            results: updatedGrade
          }
        }; 
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
    ? isCorrect
      ? ' correct'
      : ' incorrect'
    : '';

  const isCorrectWrapper = isCorrect !== null
    ? isCorrect
      ? <Icon size="150px" icon={correctIcon} text='CORRECT' />
      : <Icon size="150px" icon={incorrectIcon} text='INCORRECT' />
    : null;

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