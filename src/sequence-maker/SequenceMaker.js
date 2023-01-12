import React, { useContext, useEffect } from "react";
import useVisited from "_hooks/visited/useVisited";
import { PlayContext } from "_context/PlayContext";

import { useDispatch, useSelector } from "react-redux";
import { clearGame } from "_redux/sequence-maker/sequenceMakerActions";
import { changeCurrGame } from "_redux/_general/generalActions";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Instructions from "_components/instructions/Instructions";
import SequenceControls from "./controls/SequenceControls";
import SoundOptions from "./sound-options/SoundOptions";
import Sequence from "./sequence/Sequence";
import SequencePlayReset from "./play-reset/SequencePlayReset";

import { sequenceMaker } from "_data/_activities/activityList";
import { Transport } from "tone";
import createSounds from "_utils/sequence-maker/createSounds";

const SequenceMaker = () => {
  const [hasVisited, setHasVisited] = useVisited(sequenceMaker.lsKey);
  const { currGame } = useSelector(state => state.general);
  const { volume } = useSelector(state => state.settings);
  const { sequence } = useSelector(state => state.sequenceMaker);
  const { setPlayFn } = useContext(PlayContext);
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
    {!hasVisited ? <Instructions setVisited={setHasVisited} /> : (<>
      <SequenceControls />
      <SoundOptions />
      <Sequence />
      <SequencePlayReset />
    </>)}
  </>);
};

export default SequenceMaker;