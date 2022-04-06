// Sounds
import clappingContinuous from './sounds/clapping_continuous.mp3';
import clappingOnce from './sounds/clapping_once.mp3';
import stompingContinuous from './sounds/stomping_continuous.mp3';
import stompingOnce from './sounds/stomping_once.mp3';

// Images
import clapping from './images/clapping.png';
import stomping from './images/stomping.jpeg';
import stop from './images/stop.png'

const soundInfo = {
  bodySoundsContinuous: {
    clapping: {
      image: clapping,
      sound: clappingContinuous,
      alt: 'clapping'
    },
    stomping: {
      image: stomping,
      sound: stompingContinuous,
      alt: 'stomping'
    },
    stop: {
      image: stop,
      sound: '',
      alt: 'stop'
    }
  },
  bodySoundsOnce: {
    clap: {
      image: clapping,
      sound: clappingOnce,
      alt: 'clap'
    },
    stomp: {
      image: stomping,
      sound: stompingOnce,
      alt: 'stomp'
    },
    stop: {
      image: stop,
      sound: '',
      alt: 'stop'
    }
  },
  animals: {
    dog: {
      image: '',
      sound: '',
      alt: 'dog'
    },
    cat: {
      image: '',
      sound: '',
      alt: 'cat'
    },
    cow: {
      image: '',
      sound: '',
      alt: 'cow'
    },
    horse: {
      image: '',
      sound: '',
      alt: 'horse'
    },
    stop: {
      image: stop,
      sound: '',
      alt: 'stop'
    }
  },
  // vehicles: {
  //   car: {
  //     image: '',
  //     sound: '',
  //     alt: 'car'
  //   },
  //   plane: {
  //     image: '',
  //     sound: '',
  //     alt: 'plane'
  //   },
  //   train: {
  //     image: '',
  //     sound: '',
  //     alt: 'train'
  //   },
  //   truck: {
  //     image: '',
  //     sound: '',
  //     alt: 'bicycle'
  //   },
  // }
};

export default soundInfo;