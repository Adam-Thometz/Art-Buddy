import React from "react";

import { useDispatch } from "react-redux";
import { addPoint, removePoint } from "../../../actions";

import './Student.css'

import Points from "../points/Points";

const Student = ({ student }) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addPoint(student.name));
  };

  const remove = () => {
    dispatch(removePoint(student.name));
  };

  return (
    <div className="Student">
      <p className="Student-name">{student.name}</p>
      <button className="Student-button" onClick={add}>+</button>
      <button className="Student-button" onClick={remove}>-</button>
      <Points points={student.points} />
    </div>
  );
};

export default Student;