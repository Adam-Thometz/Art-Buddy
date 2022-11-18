import React, { useEffect } from "react";
import useVisited from "_hooks/useVisited";

import { useDispatch } from "react-redux";
import { clearGame } from "_redux/sequence-maker/sequenceMakerActions";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Instructions from "_components/instructions/Instructions";
import SequenceControls from "./controls/SequenceControls";
import SoundOptions from "./sound-options/SoundOptions";
import Sequence from "./sequence/Sequence";
import SequencePlayReset from "./play-reset/SequencePlayReset";

import activities from "_data/menu/activityList";
import { SM } from "_data/_utils/localStorageKeys";

const SequenceMaker = () => {
  const [hasVisited, setHasVisited] = useVisited(SM);
  const gameInfo = activities.find(game => game.name === 'SEQUENCE MAKER');
  const dispatch = useDispatch();
  
  useEffect(() => {
    return () => dispatch(clearGame());
  }, [dispatch]);

  return (
    <>
      <WindowNavbar page={gameInfo.name} />
      {!hasVisited ? <Instructions game={gameInfo} setHasVisited={setHasVisited} /> : (<>
        <SequenceControls />
        <SoundOptions />
        <Sequence />
        <SequencePlayReset />
      </>)}
    </>
  );
};

export default SequenceMaker;