import { now } from 'tone';
import sample from '../../_utils/sample';

let instrument;
function playScale(sound) {
  const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
  instrument = sample(window.buffer);

  const start = now();
  for (let i = 0; i < scale.length; i++) {
    const note = scale[i];
    const octave = i === scale.length-1 ? 4 : 3
    const noteOctave = `${note}${octave}`;
    const seconds = i / 2;
    instrument.triggerAttackRelease(noteOctave, '4n', start + seconds);
  };
};

export { playScale }