import React, { useEffect } from 'react';
import useLocalStorage from '_hooks/useVisited';

import { useSelector, useDispatch } from 'react-redux';
import { clearGame } from '_redux/free-paint/freePaintActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import ControlBar from './control-bar/ControlBar';
import Canvas from './canvas/Canvas';
import Stencil from './canvas/stencil/Stencil';

import activities from '_data/menu/activityList';
import { FP } from '_data/_utils/localStorageKeys';

const FreePaint = () => {
  const [hasVisited, setHasVisited] = useLocalStorage(FP);
  const { stencil } = useSelector(state => state.freePaint);
  const gameInfo = activities.find(game => game.name === 'FREE PAINT');
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearGame())
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page={gameInfo.name} />
      {!hasVisited ? <Instructions game={gameInfo} setHasVisited={setHasVisited} /> : <>
        <ControlBar />
        <Canvas />
        {stencil ? <Stencil /> : null}
      </>}
    </>
  );
};

export default FreePaint;