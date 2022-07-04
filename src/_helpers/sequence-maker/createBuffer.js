import soundInfo from "_media/sequence-maker/soundInfo";
import { Buffer } from "tone";

export default function createBuffer({category, soundId}) {
  const sound = soundInfo[category][soundId].sound;
  const buffer = new Buffer(sound);
  window[`${soundId}Buffer`] = buffer;
};