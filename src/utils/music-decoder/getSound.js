import { PitchShift, Sampler, Synth, Part, Transport } from "tone";

import getInstrument from "../instrument-id/getInstrument";

/** getSound
 * Purpose: create the sound that the decoder plays and returns a function for playing it
 * Found in: WordToMusic.js, DecoderControls.js
 */

export default function getSound({ volume, scale = 0, sampleId = "synth" }) {
  const pitchShift = new PitchShift(scale).toDestination();
  let instrument;

  if (sampleId !== "synth") {
    const { sound } = getInstrument(sampleId);
    instrument = new Sampler({ urls: { C3: sound } }).connect(pitchShift);
  } else {
    instrument = new Synth().connect(pitchShift);
  }
  instrument.volume.value = volume;

  function playSound(notes) {
    if (!Array.isArray(notes)) {
      return instrument.triggerAttackRelease(`${notes}3`, "4n");
    } else {
      const toPlay = notes.map((note, i) => ({ note, time: i / 2 }));
      const part = new Part((time, value) => {
        instrument.triggerAttackRelease(`${value.note}3`, "8n", time);
      }, toPlay);
      Transport.start();
      part.start(0);

      const timer = setTimeout(() => {
        part.stop();
        Transport.stop();
        clearTimeout(timer);
      }, 500 * notes.length);
      return part;
    }
  }

  return { instrument, playSound };
}
