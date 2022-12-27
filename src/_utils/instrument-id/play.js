import { Part, Sampler, Transport } from 'tone';

/** play: 
 * Purpose: a higher-order function that can play scales or beats. isTest is true if the function is called in the context of the listening skills test.
 * Found in: ListeningSkillsTest.js, Instrument.js
 */

export default function play({ id, volume, isRhythm, isTest = false }) {
  const playFn = isRhythm ? getHits : getNotes;
  const toPlay = playFn({ id, isTest, volume });

  const part = new Part(((time, value) => {
    const { note, sound } = value;
    sound.triggerAttackRelease(note ? note : 'C3', '4n', time)
  }), toPlay);
  Transport.start();
  part.start(0);
  const timer = setTimeout(() => {
    part.stop();
    Transport.stop();
    clearTimeout(timer);
  }, 500*(toPlay.length));
};

/** getHits:
 * Purpose: abstract functionality in playBeat to make readable
 */

function getHits({ id, isTest, volume }) {
  const upperLimit = isTest ? 5 : 10;
  const hits = [];
  for (let i = 0; i < upperLimit; i++) {
    const bufferId = `${id}Buffer${(i % 5) + 1}`;
    const buffer = window[bufferId];
    
    const sound = new Sampler({ urls: { C3: buffer } }).toDestination();
    sound.volume.value = volume;
    hits.push({ sound, time: i/2 });
  };
  return hits;
};

/** getNotes:
 * Purpose: abstract functionality in playScale to make readable
 */

function getNotes({ id, isTest, volume }) {
  const scale = ['C3', 'D3', 'E3', 'F3', 'G3'];
  if (!isTest) scale.push('A3', 'B3', 'C4');

  const sound = window[`${id}Buffer`];
  const instrument = new Sampler({ urls: { C3: sound } }).toDestination();
  instrument.volume.value = volume;
  const notes = scale.map((note, i) => ({ note, sound: instrument, time: i/2 }));
  return notes;
};