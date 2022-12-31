import { Part, Sampler, Transport } from 'tone';
import getInstrument from './getInstrument';

/** loadSounds
 * takes an array of ids, stores sounds in an object and returns play functions for them
 */

export default function loadSounds({ ids, volume, isTest }) {
  const sounds = {};
  ids.forEach(id => {
    const { sound } = getInstrument(id);
    const isRhythm = typeof sound === 'object';
    const getSound = isRhythm ? getHits : getNotes;
    sounds[id] = () => getSound({ sound, isTest, volume });
  });
  
  function play(id) {
    const toPlay = sounds[id]();
    const part = new Part((time, value) => {
      const { note, sound } = value;
      sound.triggerAttackRelease(note ? note : 'C3', '4n', time);
    }, toPlay);

    Transport.start();
    part.start(0);
    const timer = setTimeout(() => {
      part.stop();
      Transport.stop();
      clearTimeout(timer);
    }, 500*(toPlay.length));

    return part;
  };

  return { sounds, play };
}

/** getHits:
 * Purpose: abstract functionality to make a beat
 */

function getHits({ sound, isTest, volume }) {
  const upperLimit = isTest ? 5 : 10;
  const sounds = Object.values(sound);
  const hits = [];
  for (let i = 0; i < upperLimit; i++) {
    const sound = new Sampler({ 
      urls: { C3: sounds[i%5] },
      onload: () => sound.volume.value = volume
    }).toDestination();
    hits.push({ sound, time: i/2 });
  };
  return hits;
};

/** getNotes:
 * Purpose: abstract functionality to make a scale
 */

function getNotes({ sound, isTest, volume }) {
  const scale = ['C3', 'D3', 'E3', 'F3', 'G3'];
  if (!isTest) scale.push('A3', 'B3', 'C4');

  const instrument = new Sampler({
    urls: { C3: sound },
    onload: () => instrument.volume.value = volume
  }).toDestination();
  const notes = scale.map((note, i) => ({ note, sound: instrument, time: i/2 }));
  return notes;
};