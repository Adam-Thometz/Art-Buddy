import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { clearGame, loadStudents } from '_redux/score-keeper/scoreKeeperActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Students from './students/Students';
import Help from '_components/help/Help';

const ScoreKeeper = () => {
  const { roster } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch();

  useEffect(() => {
    if (roster.students) dispatch(loadStudents(roster.students));
  }, [dispatch, roster]);

  useEffect(() => {
    return () => dispatch(clearGame());
  }, [dispatch]);

  return (
    <div className="ScoreKeeper">
      <WindowNavbar page='SCORE KEEPER' cornerIcon={<Help />} />
      <header>
        <p>HULLO IM SCORE KEEPER. I CAN KEEP TRACK OF UR SCORE. LOAD STUDENTS FROM UR ROSTER</p>
      </header>
      <hr />
      <Students />
    </div>
  );
};

export default ScoreKeeper;