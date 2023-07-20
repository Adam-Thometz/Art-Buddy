import { images, sounds } from "_assets/sequence-maker/soundImageImports";

const stop = {
  image: images.STOP,
  alt: "STOP",
  sound: null,
};

const soundInfo = {
  bodySoundsContinuous: {
    clappingContinuous: {
      image: images.CLAPPING_IMG,
      alt: "CLAPPING",
      sound: sounds.CLAPPING_CONTINUOUS_SOUND,
    },
    stompingContinuous: {
      image: images.STOMPING_IMG,
      alt: "STOMPING",
      sound: sounds.STOMPING_CONTINUOUS_SOUND,
    },
    yeahContinuous: {
      image: images.YEAH_IMG,
      alt: "SAY YEAH",
      sound: sounds.YEAH_CONTINUOUS_SOUND,
    },
    stop,
  },
  bodySoundsOnce: {
    clappingOnce: {
      image: images.CLAPPING_IMG,
      alt: "CLAP",
      sound: sounds.CLAPPING_ONCE_SOUND,
    },
    stompingOnce: {
      image: images.STOMPING_IMG,
      alt: "STOMP",
      sound: sounds.STOMPING_ONCE_SOUND,
    },
    yeahOnce: {
      image: images.YEAH_IMG,
      alt: "SAY YEAH",
      sound: sounds.YEAH_ONCE_SOUND,
    },
    stop,
  },
  animals: {
    dog: {
      image: images.DOG_IMG,
      alt: "DOG",
      sound: sounds.DOG_SOUND,
    },
    cat: {
      image: images.CAT_IMG,
      alt: "CAT",
      sound: sounds.CAT_SOUND,
    },
    bird: {
      image: images.BIRD_IMG,
      alt: "BIRD",
      sound: sounds.BIRD_SOUND,
    },
    stop,
  },
};

export default soundInfo;
