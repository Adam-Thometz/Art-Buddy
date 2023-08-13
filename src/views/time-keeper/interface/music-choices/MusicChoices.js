import "./MusicChoices.css";

import MusicOption from "./music-option/MusicOption";

import timeBlocks from "data/time-keeper/timeBlocks";
import { EXCITED, RELAXED } from "assets/time-keeper/timeKeeper.assets";

const MusicChoices = ({ mood }) => {
  const moodSrc = mood === "excited" ? EXCITED : RELAXED;
  return (
    <div className="MusicChoices">
      <img src={moodSrc} alt="" />
      {timeBlocks.map((block) => (
        <MusicOption mood={mood} seconds={block.seconds} music={block[mood]} />
      ))}
    </div>
  );
};

export default MusicChoices;
