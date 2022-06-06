import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleGameOver, clearGame } from '../_redux/actions/scoreKeeperActions';

import NewStudentForm from './students/NewStudentForm';
import Students from './students/Students';
import Winners from './winners/Winners';
import Button from '../_components/button/Button';
import WindowNavbar from '../_components/window-nav/WindowNavbar';

const ScoreKeeper = () => { 
  const dispatch = useDispatch()
  const students = useSelector(state => state.scoreKeeper.students);
  const gameOver = useSelector(state => state.scoreKeeper.gameOver);
  const buttonStyles = {width: '20%', margin: '15px auto', padding: '15px'};

  const endGame = () => {
    dispatch(toggleGameOver(true));
  }

  useEffect(() => {
    return () => {
      dispatch(clearGame());
    }
  }, [dispatch]);

  return (
    <div className="ScoreKeeper">
      <WindowNavbar page='SCORE KEEPER' />
      {!gameOver ? (
        <>
          <NewStudentForm />
          <Students />
          {students.length ? 
            <Button
              small
              otherStyles={buttonStyles}
              colorId={2}
              onClick={endGame}
            >END GAME</Button>
          : null}
        </>
      ) : <Winners />}
    </div>
  );
};

export default ScoreKeeper;