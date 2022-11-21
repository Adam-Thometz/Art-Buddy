import React, { useEffect } from 'react';
import useVisited from '_hooks/useVisited';

import { useSelector, useDispatch } from 'react-redux';
import { clearGame } from '_redux/jump-into-rhythm/jumpIntoRhythmActions';
import { changeCurrGame } from '_redux/settings/mainSettingsActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import Notes from './notes/Notes';
import NoteOptions from './note-options/NoteOptions';
import FrogLilyPad from './frog-lily-pad/FrogLilyPads';

import { JIR } from '_data/_utils/localStorageKeys';
import { jumpIntoRhythm } from '_data/_activities/activityList';

const JumpIntoRhythm = () => {
  const { currGame } = useSelector(state => state.mainSettings);
  const { isDisplayingLilyPads } = useSelector(state => state.jumpIntoRhythm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(jumpIntoRhythm));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
    }
  }, [dispatch]);

  const [hasVisited, setHasVisited] = useVisited(JIR);
  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : (<>
        {isDisplayingLilyPads ? <FrogLilyPad /> : <Notes />}
        <NoteOptions />
      </>)}
    </>
  );
};

export default JumpIntoRhythm;