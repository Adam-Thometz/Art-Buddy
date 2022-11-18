import React, { useEffect } from 'react';
import useVisited from '_hooks/useVisited';

import { useSelector, useDispatch } from 'react-redux';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';

import { TK } from '_data/_utils/localStorageKeys';
import { changeCurrGame } from '_redux/settings/mainSettingsActions';
import activities from '_data/menu/activityList';

const TimeKeeper = () => {
  const { currGame } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch()
  const [hasVisited, setHasVisited] = useVisited(TK);

  useEffect(() => {
    const game = activities.find(a => a.name === 'TIME KEEPER')
    dispatch(changeCurrGame(game));
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