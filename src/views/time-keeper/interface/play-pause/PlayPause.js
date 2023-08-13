import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleTimer } from "store/time-keeper/timeKeeperReducer";

import "./PlayPause.css";

import Icon from "components/icon/Icon";

import { PLAY, PAUSE } from "assets/_general/general.assets";

const PlayPause = ({ inNav }) => {
  const { isPlaying, secondsLeft } = useSelector((state) => state.timeKeeper);
  const dispatch = useDispatch();
  const handlePlaying = () => {
    if (secondsLeft) dispatch(toggleTimer());
  };

  useEffect(() => {
    if (isPlaying && !secondsLeft) dispatch(toggleTimer());
  }, [secondsLeft, isPlaying, dispatch]);

  const icon = !isPlaying ? PLAY : PAUSE;
  const text = !isPlaying ? "START" : "STOP";

  return (
    <section className="PlayPause">
      <Icon icon={icon} text={inNav ? "" : text} onClick={handlePlaying} size={inNav ? "24px" : "100px"} />
    </section>
  );
};

export default PlayPause;
