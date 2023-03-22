import excited15sec from "_media/time-keeper/music/excited/15-sec.mp3";
import excited30sec from "_media/time-keeper/music/excited/30-sec.mp3";
import excited1min from "_media/time-keeper/music/excited/1-min.mp3";

import relaxed15sec from "_media/time-keeper/music/relaxed/15-sec.mp3";
import relaxed30sec from "_media/time-keeper/music/relaxed/30-sec.mp3";
import relaxed1min from "_media/time-keeper/music/relaxed/1-min.mp3";

export const regularTimeBlocks = [
  {
    seconds: 15,
    excited: excited15sec,
    relaxed: relaxed15sec,
  },
  {
    seconds: 30,
    excited: excited30sec,
    relaxed: relaxed30sec,
  },
  {
    seconds: 60,
    excited: excited1min,
    relaxed: relaxed1min,
  },
];

export const allTimeBlocks = [
  ...regularTimeBlocks,
  {
    seconds: 180,
    excited: null,
    relaxed: null,
  },
  {
    seconds: 300,
    excited: null,
    relaxed: null,
  },
];

export default allTimeBlocks;
