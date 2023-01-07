import React, { useEffect } from 'react';
import useVisited from '_hooks/useVisited';

import { useDispatch, useSelector } from 'react-redux';
import { changeCurrGame } from '_redux/_general/generalActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import Valence from './valence/Valence';

import { MM } from '_data/_utils/localStorageKeys';
import { moodMeter } from '_data/_activities/activityList';
import Energy from './energy/Energy';

const MoodMeter = () => {
  const [hasVisited, setHasVisited] = useVisited(MM);
  const { currGame } = useSelector(state => state.general);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(moodMeter));
    return () => {
      dispatch(changeCurrGame({}));
    };
  }, [dispatch]);

  return (<>
    <WindowNavbar page={currGame.name} />
    {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : <>
      <Valence />
      <Energy />
    </>}
  </>);
};

export default MoodMeter;