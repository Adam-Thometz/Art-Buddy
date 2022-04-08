import { images } from './soundImageImports';
import * as samples from './sampler';

const soundInfo = {
  bodySoundsContinuous: {
    clapping: {
      image: images.clapping,
      sound: samples.clappingSample,
      alt: 'clapping'
    },
    stomping: {
      image: images.stomping,
      sound: samples.stompingSample,
      alt: 'stomping'
    },
    yeah: {
      image: images.yeah,
      sound: samples.yeahLongSample,
      alt: 'say yeah'
    },
    stop: {
      image: images.stop,
      sound: null,
      alt: 'stop'
    }
  },
  bodySoundsOnce: {
    clap: {
      image: images.clapping,
      sound: samples.clapSample,
      alt: 'clap'
    },
    stomp: {
      image: images.stomping,
      sound: samples.stompSample,
      alt: 'stomp'
    },
    yeah: {
      image: images.yeah,
      sound: samples.yeahShortSample,
      alt: 'say yeah'
    },
    stop: {
      image: images.stop,
      sound: null,
      alt: 'stop'
    }
  },
  animals: {
    dog: {
      image: images.dog,
      sound: samples.dogSample,
      alt: 'bark'
    },
    cat: {
      image: images.cat,
      sound: samples.catSample,
      alt: 'meow'
    },
    bird: {
      image: images.bird,
      sound: samples.birdSample,
      alt: 'tweet'
    },
    stop: {
      image: images.stop,
      sound: null,
      alt: 'stop'
    }
  },
};

export default soundInfo;