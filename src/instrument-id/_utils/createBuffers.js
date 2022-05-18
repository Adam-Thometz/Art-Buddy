import * as sounds from '../_sounds/soundImports';
import getInstrument, { isRhythmicInstrument } from './getInstrument';
import { Buffer } from 'tone';

function createBuffers(instrumentId, instrumentName) {
  if (isRhythmicInstrument(instrumentName)) {
    const percussion = getInstrument(instrumentName);
    const sounds = Object.keys(percussion.sound);
    for (let i = 1; i <= sounds.length; i++) {
      const currBufferId = `${instrumentId}Buffer${i}`;
      const sound = percussion.sound[sounds[i]];
      window[currBufferId] = new Buffer(sound);
    }
  } else {
    const currBufferId = `${instrumentId}Buffer`;
    window[currBufferId] = new Buffer(sounds[instrumentId]);
  }
}

export default createBuffers;