import React, { useEffect } from 'react';
import useVisited from '_hooks/useVisited';

import { useSelector, useDispatch } from 'react-redux';
import { clearGame } from '_redux/free-paint/freePaintActions';
import { changeCurrGame } from '_redux/_general/generalActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import ControlBar from './control-bar/ControlBar';
import Canvas from './canvas/Canvas';
import Stencil from './stencil/Stencil';

import { freePaint } from '_data/_activities/activityList';

const FreePaint = () => {
  const [hasVisited] = useVisited(freePaint.lsKey);
  const { currGame } = useSelector(state => state.general);
  const { stencil } = useSelector(state => state.freePaint);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeCurrGame(freePaint));
    return () => {
      dispatch(clearGame())
      dispatch(changeCurrGame({}));
    };
  }, [dispatch]);

  return (<>
    <WindowNavbar page={currGame.name} />
    {!hasVisited ? <Instructions game={currGame} /> : <>
      <ControlBar />
      <Canvas />
      {stencil ? <Stencil /> : null}
    </>}
  </>);
};

export default FreePaint;