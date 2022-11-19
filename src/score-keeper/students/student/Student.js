import React from "react";

import { useDispatch } from "react-redux";
import { addPoint, removePoint } from "_redux/score-keeper/scoreKeeperActions";

import './Student.css';

import addIcon from '_media/general-icons/add.png';
import minusIcon from '_media/general-icons/minus.png';

const Student = ({ name, points }) => {
  const dispatch = useDispatch();

  const add = () => dispatch(addPoint(name));
  const minus = () => dispatch(removePoint(name));

  return (
    <div className="Student">
      <p className="Student-name">{name}</p>
      <div className="Student-point-control">
        <img src={addIcon} alt="add" onClick={add} />
        <p className="Student-points">{points}</p>
        <img src={minusIcon} alt="minus" onClick={minus} />
      </div>
    </div>
  );
};

export default Student;