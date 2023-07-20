// Time Keeper assets
import { ROOT_URL, MP3 } from "_assets/awsS3Root";

// Controls
import MUTE from "./controls/mute.png";
import RESET from "./controls/reset.png";

// Moods
import EXCITED from "./moods/excited.png";
import RELAXED from "./moods/relaxed.png";

export {
  MUTE,
  RESET,
  EXCITED,
  RELAXED
}

// Music
// - Relaxed
export const RELAXED_15_SEC_SONG = `${ROOT_URL}/time-keeper/music/relaxed/15-sec.${MP3}`;
export const RELAXED_30_SEC_SONG = `${ROOT_URL}/time-keeper/music/relaxed/30-sec.${MP3}`;
export const RELAXED_1_MIN_SONG = `${ROOT_URL}/time-keeper/music/relaxed/1-min.${MP3}`;
// - Excited
export const EXCITED_15_SEC_SONG = `${ROOT_URL}/time-keeper/music/excited/15-sec.${MP3}`;
export const EXCITED_30_SEC_SONG = `${ROOT_URL}/time-keeper/music/excited/30-sec.${MP3}`;
export const EXCITED_1_MIN_SONG = `${ROOT_URL}/time-keeper/music/excited/1-min.${MP3}`;