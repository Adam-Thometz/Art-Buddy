import React, { useEffect } from 'react';
import useVisited from '_hooks/useVisited';

import { useDispatch, useSelector } from 'react-redux';
import { clearGame, loadStudents } from '_redux/score-keeper/scoreKeeperActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import Students from './students/Students';

import { SK } from '_data/_utils/localStorageKeys';
import { changeCurrGame } from '_redux/settings/mainSettingsActions';
import activities from '_data/_activities/activityList';

const ScoreKeeper = () => {
  const [hasVisited, setHasVisited] = useVisited(SK);
  const { currGame, roster } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch();

  useEffect(() => {
    const game = activities.find(a => a.name === 'SCORE KEEPER')
    dispatch(changeCurrGame(game))
    dispatch(loadStudents(roster.students));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
    };
  }, [dispatch, roster]);

  useEffect(() => {
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : <Students />}
    </>
  );
};

export default ScoreKeeper;