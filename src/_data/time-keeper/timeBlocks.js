import excited15sec from "_media/time-keeper/music/excited/15-sec.mp3";
import excited30sec from "_media/time-keeper/music/excited/30-sec.mp3";
import excited1min from "_media/time-keeper/music/excited/1-min.mp3";

const timeBlocks = [
  {
    seconds: 15,
    excited: excited15sec,
  },
  {
    seconds: 30,
    excited: excited30sec,
  },
  {
    seconds: 60,
    excited: excited1min,
  },
  {
    seconds: 180,
    excited: excited1min,
  },
  {
    seconds: 300,
    excited: excited1min,
  },
];

export default timeBlocks;
