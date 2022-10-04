import React from 'react';
import useLocalStorage from '_hooks/useLocalStorage';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';

import activities from '_data/menu/activityList';

const FreePaint = () => {
  const [hasVisited, setHasVisited] = useLocalStorage('visited-fp');
  const gameInfo = activities.find(game => game.name === 'FREE PAINT');
  return (
    <>
      <WindowNavbar page={gameInfo.name} />
      {!hasVisited ? <Instructions game={gameInfo} setHasVisited={setHasVisited} /> : <></>}
    </>
  );
};

export default FreePaint;