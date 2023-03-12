import { useSelector } from "react-redux";

import "./TimeLeft.css";

import createDisplayTime from "_utils/time-keeper/createDisplayTime.js.js";

const TimeLeft = () => {
  const { secondsLeft } = useSelector((state) => state.timeKeeper);

  const timeDisplay = createDisplayTime(secondsLeft);

  return (
    <section className="TimeLeft">
      <h1 className="TimeLeft-text">{timeDisplay}</h1>
      <div className="TimeLeft-bar"></div>
    </section>
  );
};

export default TimeLeft;
