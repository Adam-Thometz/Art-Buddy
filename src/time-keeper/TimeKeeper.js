import React, { useEffect } from 'react';
import useVisited from '_hooks/useVisited';

import { useSelector, useDispatch } from 'react-redux';
import { changeCurrGame } from '_redux/settings/mainSettingsActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';

import { TK } from '_data/_utils/localStorageKeys';
import activities from '_data/_activities/activityList';

const TimeKeeper = () => {
  const { currGame } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch()
  const [hasVisited, setHasVisited] = useVisited(TK);

  useEffect(() => {
    dispatch(changeCurrGame(activities.timeKeeper));
    return () => dispatch(changeCurrGame({}));
  });

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : <h2>00:00:00</h2>}
    </>
  );
};

export default TimeKeeper;