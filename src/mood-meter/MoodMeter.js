import React, { useEffect } from 'react';
import useVisited from '_hooks/visited/useVisited';

import { useDispatch, useSelector } from 'react-redux';
import { changeCurrGame } from '_redux/_general/generalActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import Valence from './valence/Valence';
import Energy from './energy/Energy';

import { moodMeter } from '_data/_activities/activityList';

const MoodMeter = () => {
  const [hasVisited] = useVisited(moodMeter.lsKey);
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
    {!hasVisited ? <Instructions /> : <>
      <Valence />
      <Energy />
    </>}
  </>);
};

export default MoodMeter;