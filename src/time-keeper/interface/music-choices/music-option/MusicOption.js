import { useDispatch } from "react-redux";
import { addTimeBlocks } from "_redux/time-keeper/timeKeeperActions";
import "./MusicOption.css";

const MusicOption = ({ mood, seconds, music }) => {
  const dispatch = useDispatch();

  const handleAddSong = () => dispatch(addTimeBlocks({ mood, seconds, music }));

  const displayValue = seconds >= 60 ? `${seconds / 60} MIN` : `${seconds} SEC`;
  return (
    <div className={`MusicOption ${mood}`} onClick={handleAddSong}>
      {displayValue}
    </div>
  );
};

export default MusicOption;
