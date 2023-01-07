import React, { useContext, useEffect } from 'react';
import useVisited from '_hooks/useVisited';
import { PlayContext } from '_context/PlayContext';

import { useSelector, useDispatch } from 'react-redux';
import { clearGame } from '_redux/jump-into-rhythm/jumpIntoRhythmActions';
import { changeCurrGame } from '_redux/_general/generalActions';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import Notes from './notes/Notes';
import NoteOptions from './note-options/NoteOptions';
import FrogLilyPad from './frog-lily-pad/FrogLilyPads';

import makeFrog from '_utils/jump-into-rhythm/makeFrog';
import { jumpIntoRhythm } from '_data/_activities/activityList';
import { Transport } from 'tone';

const JumpIntoRhythm = () => {
  const { currGame } = useSelector(state => state.general);
  const { isDisplayingLilyPads } = useSelector(state => state.jumpIntoRhythm);
  const { setPlayFn } = useContext(PlayContext);
  const [hasVisited] = useVisited(jumpIntoRhythm.lsKey);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrGame(jumpIntoRhythm));
    setPlayFn(() => makeFrog().hop);
    Transport.bpm.value = 90;
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
      Transport.stop()
      Transport.bpm.value = 120;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (<>
    <WindowNavbar page={currGame.name} />
    {!hasVisited ? <Instructions /> : (<>
      {isDisplayingLilyPads ? <FrogLilyPad /> : <Notes />}
      <NoteOptions />
    </>)}
  </>);
};

export default JumpIntoRhythm;