import React from 'react';
import useLocalStorage from '_hooks/useLocalStorage';

import WindowNavbar from '_components/window-nav/WindowNavbar';
import Instructions from '_components/instructions/Instructions';
import FrogLilyPads from './frog-lily-pad/FrogLilyPads';
import NoteDisplay from './note-display/NoteDisplay';
import NoteOptions from './note-options/NoteOptions';

import activities from '_data/menu/activityList';
import { visitedJIR } from '_data/_utils/localStorageKeys';

const JumpIntoRhythm = () => {
  const [hasVisited, setHasVisited] = useLocalStorage(visitedJIR);
  const gameInfo = activities.find(game => game.name === 'JUMP INTO RHYTHM');
  return (
    <>
      <WindowNavbar page={gameInfo.name} />
      {!hasVisited ? <Instructions game={gameInfo} setHasVisited={setHasVisited} /> : (<>
        <FrogLilyPads />
        <NoteDisplay />
        <NoteOptions />
      </>)}
    </>
  );
};

export default JumpIntoRhythm;