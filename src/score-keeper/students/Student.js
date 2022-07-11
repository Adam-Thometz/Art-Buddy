import React from "react";

import { useDispatch } from "react-redux";
import { addPoint, removePoint } from "_redux/score-keeper/scoreKeeperActions";

import './Student.css';

import Button from "_components/button/Button";

const Student = ({ name, points }) => {
  const dispatch = useDispatch();

  const plus = () => dispatch(addPoint(name));
  const minus = () => dispatch(removePoint(name));

  return (
    <div className="Student">
      <p className="Student-name">{name}</p>
      <div className="Student-point-control">
        <Button colorId={0} onClick={plus}>+</Button>
        <p className="Student-points">{points}</p>
        <Button colorId={2} onClick={minus}>-</Button>
      </div>
    </div>
  );
};

export default Student;