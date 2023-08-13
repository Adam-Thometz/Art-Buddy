import { useContext } from "react";
import { PlayContext } from "_context/PlayContext";

import { useSelector, useDispatch } from "react-redux";
import { resetSequence, togglePlaying } from "_redux/sequence-maker/sequenceMakerReducer";

import "./SequencePlayReset.css";

import Icon from "_components/icon/Icon";

import { PLAY, PLAY_ALL, RESET } from "_assets/sequence-maker/sequenceMaker.assets";
import { start, Transport } from "tone";

const SequencePlayReset = () => {
  const { sequence, pitch, duration, isPlaying } = useSelector(
    (state) => state.sequenceMaker
  );
  const { playFn } = useContext(PlayContext);
  const dispatch = useDispatch();

  const handlePlay = async () => {
    if (Transport.state === "stopped") await start();
    if (isPlaying) return;

    for (let i = 0; i < sequence.length; i++) {
      if (!sequence[i]) continue;
      const start = setTimeout(() => {
        dispatch(togglePlaying(i));
        clearTimeout(start);
      }, duration * 1000 * i);
      const end = setTimeout(() => {
        dispatch(togglePlaying(i));
        clearTimeout(end);
      }, duration * 1000 + duration * 1000 * i);
    }
    playFn.playSequence({ pitch, duration, playAll: false });
  };

  const handlePlayAll = async () => {
    if (Transport.state === "stopped") await start();
    if (isPlaying) return;

    for (let i = 0; i < sequence.length; i++) {
      if (!sequence[i]) continue;
      dispatch(togglePlaying(i));
      const timer = setTimeout(() => {
        dispatch(togglePlaying(i));
        clearTimeout(timer);
      }, duration * 1000);
    }
    playFn.playSequence({ pitch, duration, playAll: true });
  };

  const handleReset = () => {
    dispatch(resetSequence());
    Transport.stop();
  };

  return (
    <section className="SequencePlayReset">
      <aside className="SequencePlayReset-play">
        <Icon
          icon={PLAY}
          text="Play"
          size="48px"
          onClick={handlePlay}
          testId="play"
        />
        <Icon
          icon={PLAY_ALL}
          text="Play All"
          size="48px"
          onClick={handlePlayAll}
          testId="playAll"
        />
      </aside>
      <aside className="SequencePlayReset-reset">
        <Icon
          icon={RESET}
          text="Reset Sequence"
          size="48px"
          onClick={handleReset}
          testId="reset"
        />
      </aside>
    </section>
  );
};

export default SequencePlayReset;
