import { now, Part, Time, Transport } from 'tone';
import sample from '../_general/sample';

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
  const toPlay = scale.map((note, i) => ({ note, time: i/2 }));

  const part = new Part(((time, value) => {
    instrument.triggerAttackRelease(value.note, '4n', time)
  }), toPlay);
  Transport.start();
  part.start(0);

  const timer = setTimeout(() => {
    part.stop();
    Transport.stop();
    clearTimeout(timer);
  }, 500*(scale.length));
};

/** playBeat: 
 * Purpose: plays a beat for rhythmic instruments. isTest is true if the function is called in the context of the listening skills test.
 * Found in: ListeningSkillsTest.js
 */

export function playBeat({ id, volume, sound, isTest = false }) {
  const soundsLength = Object.keys(sound).length;
  const upperLimit = soundsLength*(isTest ? 1 : 2);
  const hits = getHits({ id, upperLimit, soundsLength, volume });

  const part = new Part(((time, value) => {
    value.sound.triggerAttackRelease('C3', '2n', time)
  }), hits);
  Transport.start();
  part.start(0);
  const timer = setTimeout(() => {
    part.stop();
    Transport.stop();
    clearTimeout(timer);
  }, 500*(hits.length))
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
    hits.push({ sound, time: i/2 });
  };
  return hits;
};