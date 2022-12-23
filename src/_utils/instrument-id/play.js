import { Part, Sampler, Transport } from 'tone';

/** playScale: 
 * Purpose: plays a scale for non-rhythmic instruments. isTest is true if the function is called in the context of the listening skills test.
 * Found in: ListeningSkillsTest.js
 */

export function playScale({ id, volume, isTest = false }) {
  const scale = ['C3', 'D3', 'E3', 'F3', 'G3'];
  if (!isTest) scale.push('A3', 'B3', 'C4');

  const sound = window[`${id}Buffer`];
  const instrument = new Sampler({ urls: { C3: sound } }).toDestination();
  instrument.volume.value = volume;
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
  }, 500*(hits.length));
};

/** getHits:
 * Purpose: abstract functionality in playBeat to make readable
 */

function getHits({ id, upperLimit, soundsLength, volume }) {
  const hits = [];
  for (let i = 0; i < upperLimit; i++) {
    const bufferId = `${id}Buffer${(i % soundsLength) + 1}`;
    const buffer = window[bufferId];
    
    const sound = new Sampler({ urls: { C3: buffer } }).toDestination();
    sound.volume.value = volume;
    hits.push({ sound, time: i/2 });
  };
  return hits;
};