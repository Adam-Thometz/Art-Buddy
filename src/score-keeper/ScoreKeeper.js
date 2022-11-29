import React, { useEffect } from 'react';
import useVisited from '_hooks/useVisited';

import { useDispatch, useSelector } from 'react-redux';
import { clearGame, loadStudents } from '_redux/score-keeper/scoreKeeperActions';
import { changeCurrGame } from '_redux/settings/mainSettingsActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import Students from './students/Students';

import { SK } from '_data/_utils/localStorageKeys';
import { scoreKeeper } from '_data/_activities/activityList';

const ScoreKeeper = () => {
  const [hasVisited, setHasVisited] = useVisited(SK);
  const { currGame, roster } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(scoreKeeper));
    dispatch(loadStudents(roster.students));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
    };
  }, [dispatch, roster]);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : <Students />}
    </>
  );
};

export default ScoreKeeper;