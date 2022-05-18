import * as sounds from '../_sounds/soundImports';
import getInstrument, { isRhythmicInstrument } from './getInstrument';
import { Buffer } from 'tone';

export function createBuffers(instrumentId) {
  const instrument = getInstrument(instrumentId);
  if (isRhythmicInstrument(instrument)) {
    const sounds = Object.keys(instrument.sound);
    for (let i = 1; i <= sounds.length; i++) {
      const currBufferId = `${instrumentId}Buffer${i}`;
      const sound = instrument.sound[sounds[i]];
      window[currBufferId] = new Buffer(sound);
    }
  } else {
    const currBufferId = `${instrumentId}Buffer`;
    window[currBufferId] = new Buffer(sounds[instrumentId]);
  }
}

export function getBuffers(instrumentId) {
  const instrument = getInstrument(instrumentId);
  if (isRhythmicInstrument(instrument)) {
    const sounds = Object.keys(instrument.sound);
    const buffers = [];
    for (let i = 1; i < sounds.length; i++) {
      const currBufferId = `${instrumentId}Buffer${i}`;
      const buffer = window[currBufferId];
      buffers.push(buffer);
    };
    return { buffers, isRhythm: true };
  } else {
    const bufferId = `${instrumentId}Buffer`;
    const buffer = window[bufferId];
    return { buffers: buffer, isRhythm: false };
  }
}