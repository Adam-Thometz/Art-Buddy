import React, { useContext, useEffect } from "react";
import useVisited from "_hooks/useVisited";
import { PlayContext } from "_utils/_general/PlayContext";

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
import { Transport } from "tone";
import createSounds from "_utils/sequence-maker/createSounds";

const SequenceMaker = () => {
  const { currGame, volume } = useSelector(state => state.mainSettings);
  const { sequence } = useSelector(state => state.sequenceMaker);
  const { setPlayFn } = useContext(PlayContext)
  const [hasVisited, setHasVisited] = useVisited(SM);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(changeCurrGame(sequenceMaker));
    return () => {
      dispatch(clearGame());
      dispatch(changeCurrGame({}));
      Transport.stop();
    };
  }, [dispatch]);

  useEffect(() => {
    setPlayFn(() => createSounds(sequence, volume));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequence, volume]);

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