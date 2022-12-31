import * as melodies from '_media/instrument-id/_melodies-rhythms/melodies';
import * as rhythms from '_media/instrument-id/_melodies-rhythms/rhythms';
import { Part, Sampler, start, Transport } from 'tone';
import getInstrument from './getInstrument';
import calculateTimeLeft from './calculateTimeLeft';

/** createLoop:
 * Purpose: creates a loop for all instruments for the Song Maker
 * Found in: SongMaker.js, SavedSongs.js
 */

export default function createLoop(song, volume) {
  const loop = [];
  for (let instrument of song) {
    if (!instrument) continue;

    const { instrumentId, melodyId } = instrument;
    if (!melodyId) continue;

    const { sound } = getInstrument(instrumentId);
    const isRhythm = typeof sound === 'object';
    const soundToPlay = isRhythm
      ? Object.keys(sound).map((hit, i) => new Sampler({
          urls: { C3: sound[hit] },
          onload: () => soundToPlay[i].volume.value = volume
        }).toDestination())
      : new Sampler({
          urls: { C3: sound },
          onload: () => soundToPlay.volume.value = volume
        }).toDestination();
    const melody = isRhythm ? rhythms[melodyId] : melodies[melodyId];
    loop.push({ soundToPlay, melody, isRhythm });
  }

  const parts = [];
  async function playLoop() {
    if (Transport.state === 'stopped') await start()
    for (let partToPlay of loop) {
      const { soundToPlay, melody, isRhythm } = partToPlay
      const part = new Part(((time, value) => {
        isRhythm
          ? value.notes.forEach(note => soundToPlay[note].triggerAttackRelease('C3', value.duration, time))
          : soundToPlay.triggerAttackRelease(value.notes, value.duration, time);
      }), melody);
      part.loop = true;
      part.loopStart = 0;
      part.loopEnd = '4m';
      parts.push(part);
    };
    Transport.start();
    parts.forEach(part => part.start(0));
    
    return parts;
  }
  
  function stopLoop() {
    parts.forEach(part => part.stop());
    Transport.stop();
    parts.length = 0;
    return parts;
  }

  function getTimeLeft() {
    return calculateTimeLeft(parts)
  }

  return { loop, playLoop, stopLoop, getTimeLeft };
};