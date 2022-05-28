import { PitchShift, Sampler, Synth } from "tone";

export default function createSound(scale = 0, sample = null) {
  let sound;
  if (sample) {
    sound = new Sampler({
      urls: {
        C3: sample
      }
    })
  } else {
    sound = new Synth();
  }
  const pitchShift = new PitchShift({pitch: scale}).toDestination();
  sound.connect(pitchShift);
  window.wordToMusicSound = sound;
}