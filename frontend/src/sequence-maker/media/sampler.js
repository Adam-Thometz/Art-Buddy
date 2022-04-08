import * as Tone from 'tone';
import { sounds } from './soundImageImports';

const clappingSample = new Tone.Sampler({
  urls: {
    A1: sounds.clappingContinuous
  }
}).toDestination()

const stompingSample = new Tone.Sampler({
  urls: {
    A1: sounds.stompingContinuous
  }
}).toDestination()

const yeahLongSample = new Tone.Sampler({
  urls: {
    A1: sounds.yeahContinuous
  }
}).toDestination()

const clapSample = new Tone.Sampler({
  urls: {
    A1: sounds.clappingOnce
  }
}).toDestination()

const stompSample = new Tone.Sampler({
  urls: {
    A1: sounds.stompingOnce
  }
}).toDestination()

const yeahShortSample = new Tone.Sampler({
  urls: {
    A1: sounds.yeahOnce
  }
}).toDestination()

const dogSample = new Tone.Sampler({
  urls: {
    A1: sounds.bark
  }
}).toDestination()

const catSample = new Tone.Sampler({
  urls: {
    A1: sounds.meow
  }
}).toDestination()

const birdSample = new Tone.Sampler({
  urls: {
    A1: sounds.tweet
  }
}).toDestination()

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
}