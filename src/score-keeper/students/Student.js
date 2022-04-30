import React from "react";

import { useDispatch } from "react-redux";
import { addPoint, removePoint, removeStudent } from "../../_redux/actions/actions";

import './Student.css';

import Points from "../points/Points";
import Button from "../../_components/button/Button";

const Student = ({ name, color, points }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeStudent(name));
  }

  const plus = () => {
    dispatch(addPoint(name));
  };

  const minus = () => {
    if (points > 0) {
      dispatch(removePoint(name));
    };
  };

  const pointButtonStyles = {
    fontSize: '1.5rem',
    width: '30%'
  }

  return (
    <div className="Student">
      <p className="Student-name" style={{color}}>{name}</p>
      <div className="Student-point-control">
        <Button small otherStyles={pointButtonStyles} colorId={2} onClick={minus}>-</Button>
        <Button small otherStyles={pointButtonStyles} colorId={0} onClick={plus}>+</Button>
      </div>
      <Points points={points} color={color} />
      <Button small colorId={2} onClick={remove}>REMOVE FROM GAME</Button>
    </div>
  );
};

export default Student;