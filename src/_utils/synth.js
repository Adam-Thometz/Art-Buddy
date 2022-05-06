import { PitchShift, Synth, Sampler } from "tone";

const generateSynth = (pitch = 0, sample = null) => {
  let synth;
  const pitchShift = new PitchShift({pitch}).toDestination();
  if (sample && sample !== 'synth') {
    synth = new Sampler({
      urls: {
        C3: sample
      }
    }).connect(pitchShift);
  } else {
    synth = new Synth().connect(pitchShift);
  }
  return synth;
}

export default generateSynth