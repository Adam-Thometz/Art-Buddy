import { useSelector } from "react-redux";

import "./TimeBlock.css";

const TimeBlock = ({ seconds, mood, music }) => {
  const { secondsLeft } = useSelector((state) => state.timeKeeper);
  const width = `${(seconds / secondsLeft) * 100}%`;
  return (
    <div className={`TimeBlock ${mood}`} style={{ width }}>
      {parseInt(width) < 5 ? null : seconds === 60 ? "1 MIN" : `${seconds} SEC`}
    </div>
  );
};

export default TimeBlock;
