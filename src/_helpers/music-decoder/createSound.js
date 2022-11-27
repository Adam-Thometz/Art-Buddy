import { PitchShift, Synth } from "tone";
import sample from '../_general/sample';

import getInstrument from "../instrument-id/getInstrument";

/** createSound
 * Purpose: create the sound that the decoder plays and add it to the window to be played later
 * Found in: WordToMusic.js, DecoderControls.js
 */

export default function createSound({ volume, scale = 0, sampleId = 'synth' }) {
  const pitchShift = new PitchShift(scale).toDestination();
  let instrument;

  if (sampleId !== 'synth') {
    const { sound } = getInstrument(sampleId);
    instrument = sample({ sound, volume, toDestination: false }).connect(pitchShift);
  } else {
    instrument = new Synth().connect(pitchShift);
    instrument.volume.value = volume;
  };

  window.wordToMusicSound = instrument;
};