import media from './soundImageImports';

const { sounds, images } = media;

const soundInfo = {
  bodySoundsContinuous: {
    clapping: {
      image: images.clapping,
      sound: sounds.clappingContinuous,
      alt: 'clapping'
    },
    stomping: {
      image: images.stomping,
      sound: sounds.stompingContinuous,
      alt: 'stomping'
    },
    yeah: {
      image: images.yeah,
      sound: sounds.yeahContinuous,
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
      sound: sounds.clappingOnce,
      alt: 'clap'
    },
    stomp: {
      image: images.stomping,
      sound: sounds.stompingOnce,
      alt: 'stomp'
    },
    yeah: {
      image: images.yeah,
      sound: sounds.yeahOnce,
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
      sound: sounds.bark,
      alt: 'bark'
    },
    cat: {
      image: images.cat,
      sound: sounds.meow,
      alt: 'meow'
    },
    bird: {
      image: images.bird,
      sound: sounds.tweet,
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