import { PitchShift, Synth, Volume } from "tone";
import sample from '../../_utils/sample';

import getInstrument from "../../_utils/getInstrument";

export default function createSound({ volume, scale = 0, sampleId = 'synth' }) {
  let sound;
  if (sampleId !== 'synth') {
    const soundUrl = getInstrument(sampleId).sound;
    sound = sample(soundUrl);
  } else {
    sound = new Synth();
  }
  const pitchShift = new PitchShift({pitch: scale});
  const vol = new Volume(volume).toDestination();
  pitchShift.connect(vol);
  sound.connect(pitchShift);
  window.wordToMusicSound = sound;
};