import { useSelector } from "react-redux";

import "./TimeLeft.css";

import createDisplayTime from "_utils/time-keeper/createDisplayTime";

const TimeLeft = () => {
  const { secondsLeft } = useSelector((state) => state.timeKeeper);

  const timeDisplay = createDisplayTime(secondsLeft);

  return <h1 className="TimeLeft">{timeDisplay}</h1>;
};

export default TimeLeft;
