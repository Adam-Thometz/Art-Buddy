import { now } from "tone";

const play = (notes) => {
  const synth = window.synth;
  
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