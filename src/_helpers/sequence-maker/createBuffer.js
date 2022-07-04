import soundInfo from "../../sequence-maker/_media/soundInfo";
import { Buffer } from "tone";

export default function createBuffer({category, soundId}) {
  const sound = soundInfo[category][soundId].sound;
  const buffer = new Buffer(sound);
  window[`${soundId}Buffer`] = buffer;
};