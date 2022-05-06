import { Sampler } from "tone";

const sample = (sound) => (
  new Sampler({
    urls: {
      C3: sound
    }
  }).toDestination()
);

export default sample;