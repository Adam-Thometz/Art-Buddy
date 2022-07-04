import { Sampler, Volume } from "tone";

const sample = (sound, volume) => {
  const vol = new Volume(volume).toDestination()
  return new Sampler({
    urls: {
      C3: sound
    }
  }).connect(vol);
};

export default sample;