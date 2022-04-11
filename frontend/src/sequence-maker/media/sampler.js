import * as Tone from 'tone';
import { sounds } from './soundImageImports';

const newSample = (sound) => {
  return new Tone.Sampler({
    urls: {
      C2: sound
    }
  }).toDestination();
}

const clappingSample = newSample(sounds.clappingContinuous);
const stompingSample = newSample(sounds.stompingContinuous);
const yeahLongSample = newSample(sounds.yeahContinuous);
const clapSample = newSample(sounds.clappingOnce);
const stompSample = newSample(sounds.stompingOnce);
const yeahShortSample = newSample(sounds.yeahOnce);
const dogSample = newSample(sounds.bark);
const catSample = newSample(sounds.meow);
const birdSample = newSample(sounds.tweet);

export {
  clappingSample,
  stompingSample,
  yeahLongSample,
  clapSample,
  stompSample,
  yeahShortSample,
  dogSample,
  catSample,
  birdSample
};