import React from "react";

import { useDispatch } from "react-redux";
import { addPoint, removePoint } from "../../_redux/actions/actions";

import './Student.css';

import Points from "../points/Points";
import Button from "../../_components/button/Button";

const Student = ({ name, color, points }) => {

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addPoint(name));
  };

  const remove = () => {
    if (points > 0) {
      dispatch(removePoint(name));
    };
  };

  return (
    <div className="Student">
      <p className="Student-name" style={{color}}>{name}</p>
      <div className="Student-point-control">
        <Button small otherStyles={{fontSize: '1.5rem'}} colorId={2} onClick={remove}>-</Button>
        <Button small otherStyles={{fontSize: '1.5rem'}} colorId={0} onClick={add}>+</Button>
      </div>
      <Points points={points} color={color} />
    </div>
  );
};

export default Student;