import { now, Time } from 'tone';
import sample from '../../_utils/sample';

import * as melodies from '../play/song-maker/_melodies-rhythms/melodies';
import * as rhythms from '../play/song-maker/_melodies-rhythms/rhythms';

export function playScale({id, isTest = false}) {
  debugger
  const scale = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4'];
  const bufferId = `${id}Buffer`
  if (!window[bufferId]) throw new Error('Whoops! Something went wrong! Reload the page and try again!');
  const instrument = sample(window[bufferId]);
  const numNotes = isTest ? 5 : scale.length;

  const start = now();
  for (let i = 0; i < numNotes; i++) {
    const note = scale[i];
    const seconds = i / 2;
    instrument.triggerAttackRelease(note, '4n', start + seconds);
  };
};

export function playBeat({id, sound, isTest = false}) {
  const soundsLength = Object.keys(sound).length;
  const hits = [];
  const upperLimit = soundsLength*(isTest ? 1 : 2);
  for (let i = 0; i < upperLimit; i++) {
    const bufferId = `${id}Buffer${(i % soundsLength) + 1}`;
    if (!window[bufferId]) throw new Error('Whoops! Something went wrong! Reload the page and try again!');
    const buffer = window[bufferId];
    hits.push(sample(buffer));
  };
  const start = now()
  for (let i = 0; i < hits.length; i++) {
    const hit = hits[i];
    const seconds = i / 2;
    hit.triggerAttackRelease('C3', '2n', start + seconds);
  };
};

export function play({ melodyId, buffers, isRhythm }) {
  const instrument = isRhythm ?
    buffers.map(b => sample(b)) :
    sample(buffers);
  const melody = isRhythm ? rhythms[melodyId] : melodies[melodyId];
  const start = now();
  let seconds = 0;
  for (let i = 0; i < melody.length; i++) {
    const { notes, duration } = melody[i];
    for (let note of notes) {
      const instrumentToPlay = isRhythm ? instrument[note] : instrument;
      const noteToPlay = isRhythm ? 'C3' : note;
      instrumentToPlay.triggerAttackRelease(noteToPlay, duration, start + seconds);
    };
    seconds += Time(duration).toSeconds();
  };
};