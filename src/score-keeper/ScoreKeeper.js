import React, { useEffect } from 'react';
import useLocalStorage from '_hooks/useLocalStorage';

import { useDispatch, useSelector } from 'react-redux';
import { clearGame, loadStudents } from '_redux/score-keeper/scoreKeeperActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Students from './students/Students';

import activities from '_data/menu/activityList';
import Instructions from '_components/instructions/Instructions';
import { visitedSK } from '_data/_utils/localStorageKeys';

const ScoreKeeper = () => {
  const [hasVisited, setHasVisited] = useLocalStorage(visitedSK);
  const { roster } = useSelector(state => state.mainSettings);
  const gameInfo = activities.find(game => game.name === 'SCORE KEEPER');
  const dispatch = useDispatch();

  useEffect(() => {
    if (roster.students) dispatch(loadStudents(roster.students));
  }, [dispatch, roster]);

  useEffect(() => {
    return () => dispatch(clearGame());
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page={gameInfo.name} />
      {!hasVisited ? <Instructions game={gameInfo} setHasVisited={setHasVisited} /> : <Students />}
    </>
  );
};

export default ScoreKeeper;