import {
  EXCITED_15_SEC_SONG,
  EXCITED_30_SEC_SONG,
  EXCITED_1_MIN_SONG,
  RELAXED_15_SEC_SONG,
  RELAXED_30_SEC_SONG,
  RELAXED_1_MIN_SONG
} from "_assets/time-keeper/timeKeeper.assets"; 

export const regularTimeBlocks = [
  {
    seconds: 15,
    excited: EXCITED_15_SEC_SONG,
    relaxed: RELAXED_15_SEC_SONG,
  },
  {
    seconds: 30,
    excited: EXCITED_30_SEC_SONG,
    relaxed: RELAXED_30_SEC_SONG,
  },
  {
    seconds: 60,
    excited: EXCITED_1_MIN_SONG,
    relaxed: RELAXED_1_MIN_SONG,
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
