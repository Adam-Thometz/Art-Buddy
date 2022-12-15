import colors from "./colorsToFilter";

const twelveOClock = { transform: 'translate(0, 30vh)' };
const oneOClock = { transform: 'translate(10vw, 20vh)' };
const twoOClock = { transform: 'translate(20vw, 10vh)' };
const threeOClock = { transform: 'translate(30vw, 0vh)' };
const fourOClock = { transform: 'translate(20vw, -10vh)' };
const fiveOClock = { transform: 'translate(10vw, -20vh)' };
const sixOClock = { transform: 'translate(0vw, -30vh)' };
const sevenOClock = { transform: 'translate(10vw, )-20vh', };
const eightOClock = { transform: 'translate(20vw, -10vh)' };
const nineOClock = { transform: 'translate(30vw, 0vh)' };
const tenOClock = { transform: 'translate(-20vw, 10vh)' };
const elevenOClock = { transform: 'translate(-10vw, 20vh)' };

const colorWheel = {
  yellow: {
    color: colors.yellow,
    category: 'primary',
    position: twelveOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  dandelion: {
    color: colors.dandelion,
    category: 'tertiary',
    position: oneOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  orange: {
    color: colors.orange,
    category: 'secondary',
    position: twoOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  tangelo: {
    color: colors.tangelo,
    category: 'tertiary',
    position: threeOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  red: {
    color: colors.red,
    category: 'primary',
    position: fourOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  plum: {
    color: colors.plum,
    category: 'tertiary',
    position: fiveOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  violet: {
    color: colors.violet,
    category: 'secondary',
    position: sixOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  blueberry: {
    color: colors.blueberry,
    category: 'tertiary',
    position: sevenOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  blue: {
    color: colors.blue,
    category: 'primary',
    position: eightOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  emerald: {
    color: colors.emerald,
    category: 'tertiary',
    position: nineOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  green: {
    color: colors.green,
    category: 'secondary',
    position: tenOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
  pear: {
    color: colors.pear,
    category: 'tertiary',
    position: elevenOClock,
    isShowing: {
      text: false,
      color: false
    }
  },
};

export default colorWheel;