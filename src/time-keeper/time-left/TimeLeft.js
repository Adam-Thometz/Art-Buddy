import { useSelector } from "react-redux";

import "./TimeLeft.css";

import makeTwoDigits from "_utils/timeKeeper/makeTwoDigits";

const TimeLeft = () => {
  const { secondsLeft } = useSelector((state) => state.timeKeeper);

  const hours = makeTwoDigits(Math.floor(secondsLeft / 3600));
  const minutes = makeTwoDigits(Math.floor(secondsLeft / 60) % 60);
  const seconds = makeTwoDigits(secondsLeft % 60);
  const timeDisplay = `${hours}:${minutes}:${seconds}`;

  return (
    <section className="TimeLeft">
      <h1 className="TimeLeft-text">{timeDisplay}</h1>
      <div className="TimeLeft-bar"></div>
    </section>
  );
};

export default TimeLeft;
