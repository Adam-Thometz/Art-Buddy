import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeMaxScore } from "../../_redux/actions/actions";

import './MaxScore.css'

import Button from "../../_components/button/Button";

const MaxScore = () => {
  const maxScore = useSelector(state => state.scoreKeeper.maxScore);
  const dispatch = useDispatch();

  const minus = () => {
    if (maxScore === 1) return;
    dispatch(changeMaxScore(maxScore-1))
  }
  
  const plus = () => {
    dispatch(changeMaxScore(maxScore+1))
  }

  return (
    <div className="MaxScore">
      <Button small onClick={minus} colorId={2}>DECREASE GOAL (-)</Button>
      <h2>The score to get is: {maxScore}</h2>
      <Button small onClick={plus} colorId={0}>INCREASE GOAL (+)</Button>
    </div>
  );
};

export default MaxScore