// Time Keeper assets
import { 
  ROOT_URL,
  PNG,
  MP3
} from "_media/awsS3Root";

// Controls
export const MUTE = `${ROOT_URL}/time-keeper/controls/mute.${PNG}`;
export const RESET = `${ROOT_URL}/time-keeper/controls/reset.${PNG}`;

// Moods
export const EXCITED = `${ROOT_URL}/time-keeper/moods/excited.${PNG}`;
export const RELAXED = `${ROOT_URL}/time-keeper/moods/relaxed.${PNG}`;

// Music
// - Relaxed
export const RELAXED_15_SEC_SONG = `${ROOT_URL}/time-keeper/music/relaxed/15-sec.${MP3}`;
export const RELAXED_30_SEC_SONG = `${ROOT_URL}/time-keeper/music/relaxed/30-sec.${MP3}`;
export const RELAXED_1_MIN_SONG = `${ROOT_URL}/time-keeper/music/relaxed/1-min.${MP3}`;
// - Excited
export const EXCITED_15_SEC_SONG = `${ROOT_URL}/time-keeper/music/excited/15-sec.${MP3}`;
export const EXCITED_30_SEC_SONG = `${ROOT_URL}/time-keeper/music/excited/30-sec.${MP3}`;
export const EXCITED_1_MIN_SONG = `${ROOT_URL}/time-keeper/music/excited/1-min.${MP3}`;