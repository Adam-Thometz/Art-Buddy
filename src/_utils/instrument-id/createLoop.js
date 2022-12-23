import * as melodies from '_media/instrument-id/_melodies-rhythms/melodies';
import * as rhythms from '_media/instrument-id/_melodies-rhythms/rhythms';
import { Part, Sampler } from 'tone';

/** createLoop:
 * Purpose: used for Song Maker feature. Creates a loop for one instrument
 * Found in: SongMaker.js, SavedSongs.js
 */

export default function createLoop({ melodyId, volume, buffers, isRhythm }) {
  const instrument = isRhythm
    ? buffers.map(b => new Sampler({ urls: { C3: b } }).toDestination())
    : new Sampler({ urls: { C3: buffers } }).toDestination();
  isRhythm
    ? instrument.map(i => i.volume.value = volume)
    : instrument.volume.value = volume;
  const melody = isRhythm ? rhythms[melodyId] : melodies[melodyId];

  const part = new Part(((time, value) => {
    isRhythm
      ? value.notes.forEach(note => instrument[note].triggerAttackRelease('C3', value.duration, time))
      : instrument.triggerAttackRelease(value.notes, value.duration, time);
  }), melody);

  part.loop = true;
  part.loopStart = 0;
  part.loopEnd = '4m';
  return part;
};