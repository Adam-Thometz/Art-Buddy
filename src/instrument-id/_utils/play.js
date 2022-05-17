import { now } from 'tone';
import sample from '../../_utils/sample';
import getInstrument from './getInstrument';

function playScale() {
  const scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
  if (!window.buffer) throw new Error('Whoops! Something went wrong! Reload the page and try again!');
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
    const bufferIdx = (i % soundsLength) + 1;
    if (!window[`buffer${bufferIdx}`]) throw new Error('Whoops! Something went wrong! Reload the page and try again!');
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

function playMelody(melody, buffer) {
  const instrument = sample(buffer);
  const start = now();
  for (let i = 0; i < melody.length; i++) {
    const notes = melody[i];
    const seconds = i / 2;
    for (let note of notes) {
      instrument.triggerAttackRelease(`${note}3`, '8n', start + seconds);
    }
  }
}

function playRhythm(rhythm, buffers) {
  const rhythmSounds = buffers.map(buffer => sample(buffer));
  // debugger
  const start = now();
  for (let i = 0; i < rhythm.length; i++) {
    const notes = rhythm[i]
    const seconds = i / 2;
    for (let note of notes) {
      rhythmSounds[note].triggerAttackRelease('C3', '8n', start + seconds);
    }
  }
}

function isRhythmicInstrument(instrumentName) {
  const instrument = getInstrument(instrumentName);
  return typeof instrument.sound === 'object' ? true : false;
}

export { playScale, playBeat, playMelody, playRhythm, isRhythmicInstrument };