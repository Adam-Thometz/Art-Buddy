import { useDispatch } from "react-redux";
import { addOneChunk } from "_redux/time-keeper/timeKeeperActions";
import "./TimeBlock.css";

const TimeBlock = ({ mood, seconds, music }) => {
  const dispatch = useDispatch();

  const handleAddSong = () => dispatch(addOneChunk({ music, seconds }));
  const displayValue = seconds >= 60 ? `${seconds / 60} MIN` : `${seconds} SEC`;
  return (
    <div className={`TimeBlock ${mood}`} onClick={handleAddSong}>
      {displayValue}
    </div>
  );
};

export default TimeBlock;
