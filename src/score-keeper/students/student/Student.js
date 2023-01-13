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
        <img src={subtractIcon} alt="minus" role='button' onClick={subtract} />
        <p className="Student-points" data-testid='score'>{points}</p>
        <img src={addIcon} alt="add" role='button' onClick={add} />
      </div>
    </div>
  );
};

export default Student;