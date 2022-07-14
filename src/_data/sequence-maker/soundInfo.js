import { images, sounds } from '../../_media/sequence-maker/soundImageImports';

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
      sound: sounds.clappingContinuous
    },
    stompingContinuous: {
      image: images.stomping,
      alt: 'STOMPING',
      sound: sounds.stompingContinuous
    },
    yeahContinuous: {
      image: images.yeah,
      alt: 'SAY YEAH',
      sound: sounds.yeahContinuous
    },
    stop
  },
  bodySoundsOnce: {
    clappingOnce: {
      image: images.clapping,
      alt: 'CLAP',
      sound: sounds.clappingOnce
    },
    stompingOnce: {
      image: images.stomping,
      alt: 'STOMP',
      sound: sounds.stompingOnce
    },
    yeahOnce: {
      image: images.yeah,
      alt: 'SAY YEAH',
      sound: sounds.yeahOnce
    },
    stop
  },
  animals: {
    dog: {
      image: images.dog,
      alt: 'DOG',
      sound: sounds.bark
    },
    cat: {
      image: images.cat,
      alt: 'CAT',
      sound: sounds.meow
    },
    bird: {
      image: images.bird,
      alt: 'BIRD',
      sound: sounds.tweet
    },
    stop
  },
};

export default soundInfo;