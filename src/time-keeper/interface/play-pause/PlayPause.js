import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleTimer } from "_redux/time-keeper/timeKeeperReducer";

import "./PlayPause.css";

import Icon from "_components/icon/Icon";

import play from "_media/time-keeper/controls/play.png";
import pause from "_media/time-keeper/controls/pause.png";

const PlayPause = () => {
  const { isPlaying, secondsLeft } = useSelector((state) => state.timeKeeper);
  const dispatch = useDispatch();
  const handlePlaying = () => {
    if (secondsLeft) dispatch(toggleTimer());
  };

  useEffect(() => {
    if (isPlaying && !secondsLeft) dispatch(toggleTimer());
  }, [secondsLeft, isPlaying, dispatch]);

  const icon = !isPlaying ? play : pause;
  const text = !isPlaying ? "START" : "STOP";

  return (
    <section className="PlayPause">
      <Icon icon={icon} text={text} onClick={handlePlaying} size="100px" />
    </section>
  );
};

export default PlayPause;
