import React, { useEffect } from 'react';
import useVisited from '_hooks/useVisited';

import { useSelector, useDispatch } from 'react-redux';
import { changeCurrGame } from '_redux/settings/mainSettingsActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import FrogLilyPads from './frog-lily-pad/FrogLilyPads';
import NoteDisplay from './note-display/NoteDisplay';
import NoteOptions from './note-options/NoteOptions';

import { JIR } from '_data/_utils/localStorageKeys';
import activities from '_data/_activities/activityList';

const JumpIntoRhythm = () => {
  const { currGame } = useSelector(state => state.mainSettings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(activities.jumpIntoRhythm));
    return () => {
      dispatch(changeCurrGame({}));
    }
  }, [dispatch]);

  const [hasVisited, setHasVisited] = useVisited(JIR);
  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : (<>
        <FrogLilyPads />
        <NoteDisplay />
        <NoteOptions />
      </>)}
    </>
  );
};

export default JumpIntoRhythm;