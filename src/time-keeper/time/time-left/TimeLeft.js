import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrementOneSecond } from "_redux/time-keeper/timeKeeperReducer";
import { setCurrTimer } from "_redux/_general/generalReducer";

import "./TimeLeft.css";

import createDisplayTime from "_utils/time-keeper/createDisplayTime";

const TimeLeft = () => {
  const { timer } = useSelector((state) => state.general);
  const { secondsLeft, isPlaying } = useSelector((state) => state.timeKeeper);
  const dispatch = useDispatch()

  useEffect(() => {
    if (isPlaying && !timer) {
      if (!timer && secondsLeft) {
        const timeOut = setTimeout(() => {
          dispatch(decrementOneSecond())
          clearTimeout(timeOut)
          setCurrTimer(null);
        }, 1000);
        dispatch(setCurrTimer(timeOut));
      }
      if (!secondsLeft) {
        clearTimeout(timer);
        setCurrTimer(null);
      }
    } else if (!isPlaying) {
      clearTimeout(timer);
      setCurrTimer(null);
    }
  }, [isPlaying, secondsLeft, dispatch, timer])

  const timeDisplay = createDisplayTime(secondsLeft);

  return <h1 className="TimeLeft">{timeDisplay}</h1>;
};

export default TimeLeft;
