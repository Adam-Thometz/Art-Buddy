import { images } from './soundImageImports';

const stop = {
  image: images.stop,
  sound: null,
  alt: 'STOP'
}

const soundInfo = {
  bodySoundsContinuous: {
    clappingContinuous: {
      image: images.clapping,
      alt: 'CLAPPING',
    },
    stompingContinuous: {
      image: images.stomping,
      alt: 'STOMPING',
    },
    yeahContinuous: {
      image: images.yeah,
      alt: 'SAY YEAH',
    },
    stop
  },
  bodySoundsOnce: {
    clappingOnce: {
      image: images.clapping,
      alt: 'CLAP',
    },
    stompingOnce: {
      image: images.stomping,
      alt: 'STOMP',
    },
    yeahOnce: {
      image: images.yeah,
      alt: 'SAY YEAH',
    },
    stop
  },
  animals: {
    dog: {
      image: images.dog,
      alt: 'DOG',
    },
    cat: {
      image: images.cat,
      alt: 'CAT',
    },
    bird: {
      image: images.bird,
      alt: 'BIRD',
    },
    stop
  },
};

export default soundInfo;