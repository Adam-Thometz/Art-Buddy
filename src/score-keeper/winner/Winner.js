import React from "react";

import { useDispatch } from "react-redux";
import { resetScores } from "../../_redux/actions/actions";

import Button from "../../_components/button/Button";
import Points from "../points/Points";

const Winner = ({ name, color, points }) => {
  const dispatch = useDispatch()
  const handleReset = () => {
    dispatch(resetScores())
  }
  return (
    <div className="Winner">
      <h1 style={{color}}>{name.toUpperCase()} WINS!</h1>
      <Points points={points} color={color} />
      <Button colorId={3} onClick={handleReset}>RESET SCORES</Button>
    </div>
  );
};

export default Winner;