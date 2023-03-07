import * as melodies from '_media/instrument-id/_melodies-rhythms/melodies';
import * as rhythms from '_media/instrument-id/_melodies-rhythms/rhythms';
import { Part, Sampler, start, Transport, Time } from 'tone';
import getInstrument from './getInstrument';

/** createLoop:
 * Purpose: creates a loop for all instruments for the Song Maker
 * Returns function for playing the loop, stopping the loop, and getting the time left
 * Found in: SongMaker.js, SavedSongs.js
 */

export default function createLoop(song, volume) {
  const loopParts = [];
  const playingLoop = [];

  for (let instrument of song) {
    if (!instrument) continue;

    const { instrumentId, melodyId } = instrument;
    if (!melodyId) continue;

    const { sound } = getInstrument(instrumentId);
    const isRhythm = typeof sound === 'object';
    const soundToPlay = isRhythm
      ? Object.keys(sound).map((hit, i) =>
          new Sampler({
            urls: { C3: sound[hit] },
            onload: () => (soundToPlay[i].volume.value = volume),
          }).toDestination()
        )
      : new Sampler({
          urls: { C3: sound },
          onload: () => (soundToPlay.volume.value = volume),
        }).toDestination();
    const melody = isRhythm ? rhythms[melodyId] : melodies[melodyId];
    loopParts.push({ soundToPlay, melody, isRhythm });
  }

  async function playLoop() {
    if (Transport.state === 'stopped') await start();
    for (let partToPlay of loopParts) {
      const { soundToPlay, melody, isRhythm } = partToPlay;
      const part = new Part((time, value) => {
        isRhythm
          ? value.notes.forEach((note) => soundToPlay[note].triggerAttackRelease('C3', value.duration, time))
          : soundToPlay.triggerAttackRelease(value.notes, value.duration, time);
      }, melody);
      part.loop = true;
      part.loopStart = 0;
      part.loopEnd = '4m';
      playingLoop.push(part);
    }

    Transport.start();
    playingLoop.forEach((part) => part.start(0));
    return playingLoop;
  }

  function stopLoop() {
    playingLoop.forEach((part) => part.stop());
    Transport.stop();
    playingLoop.length = 0;
    return playingLoop;
  }

  function getTimeLeft() {
    const MOST_POSSIBLE_TIME = Time('4m').toSeconds() * 1000;
    const progress = playingLoop.map((part) => MOST_POSSIBLE_TIME * part.progress);
    const timeLeft = progress.reduce((accum, value) => accum + value, 0) / progress.length;
    return MOST_POSSIBLE_TIME - timeLeft;
  }

  return { loopParts, playLoop, stopLoop, getTimeLeft };
}
