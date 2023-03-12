import excited15sec from "_media/time-keeper/music/excited/15-sec.mp3";
import excited30sec from "_media/time-keeper/music/excited/30-sec.mp3";
import excited1min from "_media/time-keeper/music/excited/1-min.mp3";

export const regularTimeBlocks = [
  {
    seconds: 15,
    excited: [excited15sec],
  },
  {
    seconds: 30,
    excited: [excited30sec],
  },
  {
    seconds: 60,
    excited: [excited1min],
  },
];

export const allTimeBlocks = [
  ...regularTimeBlocks,
  {
    seconds: 180,
    excited: [],
  },
  {
    seconds: 300,
    excited: [],
  },
];

export default allTimeBlocks;
