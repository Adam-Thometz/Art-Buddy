import soundInfo from "../_media/soundInfo";
import { Buffer } from "tone";

export function createBuffer({category, soundId}) {
  const sound = soundInfo[category][soundId].sound;
  const buffer = new Buffer(sound);
  window[`${soundId}Buffer`] = buffer;
}