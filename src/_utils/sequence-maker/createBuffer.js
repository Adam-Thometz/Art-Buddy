import soundInfo from "_data/sequence-maker/soundInfo";
import { Buffer } from "tone";

/** createBuffer
 * Purpose: creates a buffer and places it in the window object to make a sample when needed
 * Found in: SoundOptions.js
 */

export default function createBuffer({ category, soundId }) {
  const { sound } = soundInfo[category][soundId];
  const buffer = new Buffer(sound);
  window[`${soundId}Buffer`] = buffer;
};