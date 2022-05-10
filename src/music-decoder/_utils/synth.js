import { PitchShift, Synth, Sampler, now } from "tone";

const play = (notes, pitch = 0, sample = null) => {
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
  
  if (!Array.isArray(notes)) {
    synth.triggerAttackRelease(`${notes}3`, '4n');
  } else {
    const start = now();
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      const seconds = i / 2;
      synth.triggerAttackRelease(`${note}3`, '8n', start + seconds);
    }
  }
}

export default play;