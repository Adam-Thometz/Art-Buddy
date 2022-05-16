import { now } from 'tone';
import sample from '../../_utils/sample';

function playScale() {
  const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
  const instrument = sample(window.buffer);

  const start = now();
  for (let i = 0; i < scale.length; i++) {
    const note = scale[i];
    const octave = i === scale.length-1 ? 4 : 3
    const noteOctave = `${note}${octave}`;
    const seconds = i / 2;
    instrument.triggerAttackRelease(noteOctave, '4n', start + seconds);
  };
};

function playBeat(sound) {
  const soundsLength = Object.keys(sound).length;
  const hits = [];
  const upperLimit = soundsLength*2 < 8 ? 8 : soundsLength*2;
  for (let i = 0; i < upperLimit; i++) {
    const bufferIdx = (i % soundsLength) + 1
    const buffer = window[`buffer${bufferIdx}`];
    hits.push(sample(buffer));
  };
  const start = now()
  for (let i = 0; i < hits.length; i++) {
    const hit = hits[i]
    const seconds = i / 2;
    hit.triggerAttackRelease('C3', '2n', start + seconds);
  }
}

export { playScale, playBeat };