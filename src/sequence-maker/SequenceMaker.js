import React, { useEffect } from "react";
import useVisited from "_hooks/useVisited";

import { useDispatch, useSelector } from "react-redux";
import { clearGame } from "_redux/sequence-maker/sequenceMakerActions";
import { changeCurrGame } from "_redux/settings/mainSettingsActions";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Instructions from "_components/instructions/Instructions";
import SequenceControls from "./controls/SequenceControls";
import SoundOptions from "./sound-options/SoundOptions";
import Sequence from "./sequence/Sequence";
import SequencePlayReset from "./play-reset/SequencePlayReset";

import { SM } from "_data/_utils/localStorageKeys";
import { sequenceMaker } from "_data/_activities/activityList";

const SequenceMaker = () => {
  const { currGame } = useSelector(state => state.mainSettings)
  const [hasVisited, setHasVisited] = useVisited(SM);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeCurrGame(sequenceMaker));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
    };
  }, [dispatch]);

  return (<>
    <WindowNavbar page={currGame.name} />
    {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : (<>
      <SequenceControls />
      <SoundOptions />
      <Sequence />
      <SequencePlayReset />
    </>)}
  </>);
};

export default SequenceMaker;