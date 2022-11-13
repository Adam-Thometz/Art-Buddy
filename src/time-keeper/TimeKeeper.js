import React from 'react';
import useLocalStorage from '_hooks/useLocalStorage';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';

import activities from '_data/menu/activityList';
import { visitedTK } from '_data/_utils/localStorageKeys';

const TimeKeeper = () => {
  const [hasVisited, setHasVisited] = useLocalStorage(visitedTK);
  const gameInfo = activities.find(game => game.name === 'TIME KEEPER');
  return (
    <>
      <WindowNavbar page={gameInfo.name} />
      {!hasVisited ? <Instructions game={gameInfo} setHasVisited={setHasVisited} /> : <h2>00:00:00</h2>}
    </>
  );
};

export default TimeKeeper;