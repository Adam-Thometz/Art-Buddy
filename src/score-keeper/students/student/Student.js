import React from "react";

import { useDispatch } from "react-redux";
import { updatePoints } from "_redux/score-keeper/scoreKeeperActions";

import './Student.css';

import addIcon from '_media/_general/add.png';
import subtractIcon from '_media/_general/minus.png';

const Student = ({ name, points }) => {
  const dispatch = useDispatch();

  const add = () => dispatch(updatePoints({ name, instruction: 'add' }));
  const subtract = () => dispatch(updatePoints({ name, instruction: 'subtract' }));

  return (
    <div className="Student">
      <p className="Student-name">{name}</p>
      <div className="Student-point-control">
        <img src={addIcon} alt="add" onClick={add} />
        <p className="Student-points">{points}</p>
        <img src={subtractIcon} alt="minus" onClick={subtract} />
      </div>
    </div>
  );
};

export default Student;