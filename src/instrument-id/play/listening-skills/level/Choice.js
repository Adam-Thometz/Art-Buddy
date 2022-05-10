import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectChoice } from "../../../../_redux/actions/insturmentIdActions";

import './Choice.css'

import Icon from "../../../../_components/icon/Icon";

const Choice = ({ id, level, choice }) => {
  const dispatch = useDispatch()
  const [isCorrect, setIsCorrect] = useState(null);
  const answer = useSelector(state => state.instrumentId.answer);

  const checkAnswer = () => {
    const result = choice.name === answer.name ? true : false;
    setIsCorrect(result);
    const timer = setTimeout(() => {
      if (answer.name === choice.name) {
        dispatch(selectChoice({ id, level, choice: choice.family }));
      }
      setIsCorrect(null);
      clearTimeout(timer);
    }, 1000);
  };

  const swapInstrument = () => {
    dispatch(selectChoice({ id, level, choice: choice.family }));
  }

  useEffect(() => {

  }, [choice])

  const isCorrectClass = isCorrect !== null
    ? (isCorrect ? ' correct' : ' incorrect')
    : '';

  return (
    <div className={`Choice${isCorrectClass}`}>
      <Icon icon={choice.icon} text={choice.name} onClick={checkAnswer} />
      <Icon text='SWAP' size="30px" onClick={swapInstrument}/>
    </div>
  );
};

export default Choice;