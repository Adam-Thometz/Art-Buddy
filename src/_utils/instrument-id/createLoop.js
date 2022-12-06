import * as melodies from '_media/instrument-id/_melodies-rhythms/melodies';
import * as rhythms from '_media/instrument-id/_melodies-rhythms/rhythms';

import sample from '_utils/_general/sample';
import { Part } from 'tone';

/** play:
 * Purpose: used for Song Maker feature. Plays a melody/rhythm using a passed in buffer (or buffers if rhythm)
 * Found in: SongMaker.js, SavedSongs.js
 */

 export default function createLoop({ melodyId, volume, buffers, isRhythm }) {
  const instrument = isRhythm ?
    buffers.map(b => sample({ sound: b, volume })) :
    sample({ sound: buffers, volume });
  const melody = isRhythm ? rhythms[melodyId] : melodies[melodyId];

  const part = new Part(((time, value) => {
    if (isRhythm) {
      value.notes.forEach(note => instrument[note].triggerAttackRelease('C3', value.duration, time));
    } else {
      instrument.triggerAttackRelease(value.notes, value.duration, time);
    }
  }), melody);

  part.loop = true;
  part.loopStart = 0;
  part.loopEnd = '4m';
  return part;
};