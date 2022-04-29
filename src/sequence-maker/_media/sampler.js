import * as Tone from 'tone';
import { sounds } from './soundImageImports';

const newSample = (sound) => {
  return new Tone.Sampler({
    urls: {
      C2: sound
    }
  }).toDestination();
}

export const clappingSample = newSample(sounds.clappingContinuous);
export const stompingSample = newSample(sounds.stompingContinuous);
export const yeahLongSample = newSample(sounds.yeahContinuous);
export const clapSample = newSample(sounds.clappingOnce);
export const stompSample = newSample(sounds.stompingOnce);
export const yeahShortSample = newSample(sounds.yeahOnce);
export const dogSample = newSample(sounds.bark);
export const catSample = newSample(sounds.meow);
export const birdSample = newSample(sounds.tweet);