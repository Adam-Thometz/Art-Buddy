import { useDispatch } from "react-redux";
import { addOneChunk } from "_redux/time-keeper/timeKeeperActions";
import "./MusicOption.css";

const MusicOption = ({ mood, seconds, music }) => {
  const dispatch = useDispatch();

  const handleAddSong = () => dispatch(addOneChunk({ mood, seconds, music }));

  const displayValue = seconds >= 60 ? `${seconds / 60} MIN` : `${seconds} SEC`;
  return (
    <div className={`MusicOption ${mood}`} onClick={handleAddSong}>
      {displayValue}
    </div>
  );
};

export default MusicOption;
