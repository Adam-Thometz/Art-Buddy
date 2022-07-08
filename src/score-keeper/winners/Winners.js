import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { resetScores, toggleGameOver } from "_redux/score-keeper/scoreKeeperActions";

import './Winners.css';

import Button from "_components/button/Button";

const Winners = () => {
  const { winners } = useSelector(state => state.scoreKeeper);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetScores());
    dispatch(toggleGameOver(false));
  };

  return (
    <div className="Winners">
      <h1>Winners:</h1>
      {winners.map(winner => (
        <p style={{color: winner.color}}>{winner.name}</p>
      ))}
      <Button
        colorId={3}
        onClick={handleReset}
      >RESET SCORES</Button>
    </div>
  );
};

export default Winners;