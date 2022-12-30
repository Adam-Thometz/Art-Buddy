import React, { useEffect, useMemo, useState } from "react";
import useVisited from "_hooks/useVisited";
import PlayContext from "_utils/_general/PlayContext";

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
import { createSounds } from "_utils/sequence-maker/createSound";

const SequenceMaker = () => {
  const { currGame, volume } = useSelector(state => state.mainSettings);
  const { sequence } = useSelector(state => state.sequenceMaker);
  const [playFn, setPlayFn] = useState(null);
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
    setPlayFn(() => createSounds(sequence, volume))
  }, [sequence, volume]);

  const isPlaying = useMemo(() => (
    sequence.filter(block => block !== null).some(block => block.isPlaying)
  ), [sequence]);

  return (<PlayContext.Provider value={{ playFn, setPlayFn, isPlaying }}>
    <WindowNavbar page={currGame.name} />
    {!hasVisited ? <Instructions game={currGame} setHasVisited={setHasVisited} /> : (<>
      <SequenceControls />
      <SoundOptions />
      <Sequence />
      <SequencePlayReset />
    </>)}
  </PlayContext.Provider>);
};

export default SequenceMaker;