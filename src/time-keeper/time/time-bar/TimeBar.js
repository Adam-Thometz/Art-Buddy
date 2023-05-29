import { useSelector } from "react-redux";

import "./TimeBar.css";

import TimeBlock from "./time-block/TimeBlock";

const TimeBar = () => {
  const { song } = useSelector((state) => state.timeKeeper);
  const border = `5px solid ${!song.length ? "#d4d2d5" : "transparent"}`;
  return (
    <div className="TimeBar" style={{ border }}>
      {song.map((part, i) => (
        <TimeBlock
          seconds={part.seconds}
          mood={part.mood}
          i={i}
        />
      ))}
    </div>
  );
};

export default TimeBar;
