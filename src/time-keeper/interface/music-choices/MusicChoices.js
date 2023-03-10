import "./MusicChoices.css";

import TimeBlock from "time-keeper/interface/music-choices/time-block/TimeBlock";

import timeBlocks from "_data/time-keeper/timeBlocks";
import excited from "_media/time-keeper/moods/excited.png";
import relaxed from "_media/time-keeper/moods/relaxed.png";

const MusicChoices = ({ mood }) => {
  const moodSrc = mood === "excited" ? excited : relaxed;
  return (
    <div className="MusicChoices">
      <img src={moodSrc} alt="" />
      {timeBlocks.map((block) => (
        <TimeBlock mood={mood} seconds={block.seconds} music={block[mood]} />
      ))}
    </div>
  );
};

export default MusicChoices;
