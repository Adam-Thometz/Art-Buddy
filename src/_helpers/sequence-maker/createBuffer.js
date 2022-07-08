import soundInfo from "_media/sequence-maker/soundInfo";
import { Buffer } from "tone";

/** createBuffer
 * Purpose: creates a buffer to place in the window object to make a sample when needed
 * Found in: SoundOptions.js
 */

export default function createBuffer({ category, soundId }) {
  const sound = soundInfo[category][soundId].sound;
  const buffer = new Buffer(sound);
  window[`${soundId}Buffer`] = buffer;
};