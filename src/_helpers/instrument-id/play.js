import { now, Time } from 'tone';
import sample from '../_utils/sample';

import * as melodies from '_media/instrument-id/_melodies-rhythms/melodies';
import * as rhythms from '_media/instrument-id/_melodies-rhythms/rhythms';

/** playScale: 
 * Purpose: plays a scale for non-rhythmic instruments. isTest is true if the function is called in the context of the listening skills test.
 * Found in: ListeningSkillsTest.js
 */

export function playScale({ id, volume, isTest = false }) {
  const scale = ['C3', 'D3', 'E3', 'F3', 'G3'];
  if (!isTest) scale.push('A3', 'B3', 'C4');

  const sound = window[`${id}Buffer`];

  const instrument = sample({ sound, volume });
  const start = now();
  scale.forEach((note, i) => {
    const seconds = i / 2;
    instrument.triggerAttackRelease(note, '4n', start + seconds);
  });
};

/** playBeat: 
 * Purpose: plays a beat for rhythmic instruments. isTest is true if the function is called in the context of the listening skills test.
 * Found in: ListeningSkillsTest.js
 */

export function playBeat({ id, volume, sound, isTest = false }) {
  const soundsLength = Object.keys(sound).length;
  const upperLimit = soundsLength*(isTest ? 1 : 2);
  const hits = getHits({ id, upperLimit, soundsLength, volume });

  const start = now();
  hits.forEach((hit, i) => {
    const seconds = i / 2;
    hit.triggerAttackRelease('C3', '2n', start + seconds);
  });
};

/** play:
 * Purpose: used for Song Maker feature. Plays a melody/rhythm using a passed in buffer (or buffers if rhythm)
 * Found in: SongMaker.js, SavedSongs.js
 */

export function play({ melodyId, volume, buffers, isRhythm }) {
  const instrument = isRhythm ?
    buffers.map(b => sample({ sound: b, volume })) :
    sample({ sound: buffers, volume });
  const melody = isRhythm ? rhythms[melodyId] : melodies[melodyId];
  
  const start = now();
  let seconds = 0;
  melody.forEach(beat => {
    const { notes, duration } = beat;
    notes.forEach(note => {
      const instrumentToPlay = isRhythm ? instrument[note] : instrument;
      const noteToPlay = isRhythm ? 'C3' : note;
      instrumentToPlay.triggerAttackRelease(noteToPlay, duration, start + seconds);
    });
    seconds += Time(duration).toSeconds();
  });
};

/** getHits:
 * Purpose: abstract functionality in playBeat to make readable
 */

function getHits({ id, upperLimit, soundsLength, volume }) {
  const hits = [];
  for (let i = 0; i < upperLimit; i++) {
    const bufferId = `${id}Buffer${(i % soundsLength) + 1}`;
    const buffer = window[bufferId];
    
    const sound = sample({ sound: buffer, volume });
    hits.push(sound);
  };
  return hits;
};