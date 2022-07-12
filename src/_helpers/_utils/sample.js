import { Sampler, Volume } from "tone";

/** sample
 * Purpose: takes a sound and a number for volume and returns a sample to play notes with. Used mainly in play-related function
 */

const sample = (sound, volume) => {
  const vol = new Volume(volume).toDestination();
  return new Sampler({
    urls: { C3: sound }
  }).connect(vol);
};

export default sample;