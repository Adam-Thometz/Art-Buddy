import { useContext, useEffect } from "react";
import useVisited from "hooks/visited/useVisited";
import { PlayContext } from "context/PlayContext";

import { useDispatch, useSelector } from "react-redux";
import { clearGame } from "store/sequence-maker/sequenceMakerReducer";
import { changeCurrGame } from "store/_general/generalReducer";

import WindowNavbar from "components/window-nav/WindowNavbar";
import Instructions from "components/instructions/Instructions";
import SequenceControls from "./controls/SequenceControls";
import SoundOptions from "./sound-options/SoundOptions";
import Sequence from "./sequence/Sequence";
import SequencePlayReset from "./play-reset/SequencePlayReset";

import { sequenceMaker } from "data/_activities/activityList";
import { Transport } from "tone";
import createSounds from "lib/sequence-maker/createSounds";

const SequenceMaker = () => {
  const [hasVisited, setHasVisited] = useVisited(sequenceMaker.lsKey);
  const { currGame } = useSelector((state) => state.general);
  const { volume } = useSelector((state) => state.settings);
  const { sequence } = useSelector((state) => state.sequenceMaker);
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

  return (
    <>
      <WindowNavbar page={currGame.name} />
      {!hasVisited ? (
        <Instructions setVisited={setHasVisited} />
      ) : (
        <>
          <SequenceControls />
          <SoundOptions />
          <Sequence />
          <SequencePlayReset />
        </>
      )}
    </>
  );
};

export default SequenceMaker;
