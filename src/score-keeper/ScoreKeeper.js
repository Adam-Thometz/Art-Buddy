import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { clearGame, loadStudents } from '_redux/score-keeper/scoreKeeperActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Students from './students/Students';

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
    <>
      <WindowNavbar page='SCORE KEEPER' />
      <Students />
    </>
  );
};

export default ScoreKeeper;