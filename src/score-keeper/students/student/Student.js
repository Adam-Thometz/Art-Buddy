import { useDispatch } from "react-redux";
import { updatePoints } from "_redux/score-keeper/scoreKeeperReducer";

import "./Student.css";

import { ADD, MINUS } from "_media/_general/general.assets";

const Student = ({ name, points }) => {
  const dispatch = useDispatch();

  const add = () => dispatch(updatePoints({ name, instruction: "add" }));
  const subtract = () =>
    dispatch(updatePoints({ name, instruction: "subtract" }));

  return (
    <div className="Student">
      <p className="Student-name">{name}</p>
      <div className="Student-point-control">
        <img src={MINUS} alt="minus" role="button" onClick={subtract} />
        <p className="Student-points" data-testid="score">
          {points}
        </p>
        <img src={ADD} alt="add" role="button" onClick={add} />
      </div>
    </div>
  );
};

export default Student;
