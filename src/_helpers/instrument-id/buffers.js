import * as sounds from '_media/instrument-id/_sounds/soundImports';
import getInstrument from './getInstrument';
import { Buffer } from 'tone';

/** createBuffers(instrumentId):
 * Purpose: create buffers to add to the window object. Buffers will be used to create samples later.
 * Found in: ListeningSkillsTest.js, InstrumentDisplay.js, SavedSongs.js, Instrument.js
 */

export function createBuffers(instrumentId) {
  const instrument = getInstrument(instrumentId);
  if (instrument.isRhythm) {
    const sounds = Object.keys(instrument.sound);
    for (let i = 0; i < sounds.length; i++) {
      const currBufferId = `${instrumentId}Buffer${i+1}`;
      const sound = instrument.sound[sounds[i]];
      window[currBufferId] = new Buffer(sound);
    };
  } else {
    const currBufferId = `${instrumentId}Buffer`;
    window[currBufferId] = new Buffer(sounds[instrumentId]);
  };
};

/** getBuffers(instrumentId):
 * Purpose: get a created buffer to create a sample.
 * Found in: SongMaker.js, SavedSongs.js
 */

export function getBuffers(instrumentId) {
  const instrument = getInstrument(instrumentId);
  if (instrument.isRhythm) {
    const sounds = Object.keys(instrument.sound);
    const buffers = [];
    for (let i = 0; i < sounds.length; i++) {
      const currBufferId = `${instrumentId}Buffer${i+1}`;
      const buffer = window[currBufferId];
      buffers.push(buffer);
    };
    return { buffers, isRhythm: true };
  } else {
    const bufferId = `${instrumentId}Buffer`;
    const buffer = window[bufferId];
    return { buffers: buffer, isRhythm: false };
  };
};

/** removeBuffers:
 * Purpose: clean up the window object by removing buffers when they are no longer needed.
 * Found in: ListeningSkillsTest.js, SongMaker.js, Instrument.js
 */

export function removeBuffers() {
  const bufferKeys = Object.keys(window).filter(key => key.includes('Buffer'));
  for (let key of bufferKeys) {
    delete window[key];
  };
};