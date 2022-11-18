import React, { useEffect } from 'react';
import useLocalStorage from '_hooks/useVisited';

import { useSelector, useDispatch } from 'react-redux';
import { clearGame } from '_redux/free-paint/freePaintActions';
import { changeCurrGame } from '_redux/settings/mainSettingsActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import ControlBar from './control-bar/ControlBar';
import Canvas from './canvas/Canvas';
import Stencil from './canvas/stencil/Stencil';

import activities from '_data/_activities/activityList';
import { FP } from '_data/_utils/localStorageKeys';

const FreePaint = () => {
  const { currGame } = useSelector(state => state.mainSettings);
  const { stencil } = useSelector(state => state.freePaint);
  const [hasVisited, setHasVisited] = useLocalStorage(FP);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const game = activities.find(game => game.name === 'FREE PAINT');
    dispatch(changeCurrGame(game));
    return () => dispatch(clearGame());
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : <>
        <ControlBar />
        <Canvas />
        {stencil ? <Stencil /> : null}
      </>}
    </>
  );
};

export default FreePaint;