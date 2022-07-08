import { PitchShift, Synth, Volume } from "tone";
import sample from '../sample';

import getInstrument from "../instrument-id/getInstrument";

/** createSound
 * Purpose: create the sound that the decoder plays and add it to the window to be played later
 * Found in: WordToMusic.js, DecoderControls.js
 */

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