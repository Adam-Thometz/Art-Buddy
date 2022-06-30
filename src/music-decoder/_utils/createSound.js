import { PitchShift, Synth } from "tone";
import sample from '../../_utils/sample';

import getInstrument from "../../_utils/getInstrument";

export default function createSound(scale = 0, sampleId = null) {
  let sound;
  if (sampleId) {
    const soundUrl = getInstrument(sampleId).sound;
    sound = sample(soundUrl);
  } else {
    sound = new Synth();
  }
  const pitchShift = new PitchShift({pitch: scale}).toDestination();
  sound.connect(pitchShift);
  window.wordToMusicSound = sound;
};