import React from 'react';
import useVisited from '_hooks/useVisited';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';

import activities from '_data/menu/activityList';
import { TK } from '_data/_utils/localStorageKeys';

const TimeKeeper = () => {
  const [hasVisited, setHasVisited] = useVisited(TK);
  const gameInfo = activities.find(game => game.name === 'TIME KEEPER');
  return (
    <>
      <WindowNavbar page={gameInfo.name} />
      {!hasVisited ? <Instructions game={gameInfo} setHasVisited={setHasVisited} /> : <h2>00:00:00</h2>}
    </>
  );
};

export default TimeKeeper;