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
      name: false,
      color: false
    }
  },
  dandelion: {
    color: colors.dandelion,
    category: 'tertiary',
    position: oneOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
  orange: {
    color: colors.orange,
    category: 'secondary',
    position: twoOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
  tangelo: {
    color: colors.tangelo,
    category: 'tertiary',
    position: threeOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
  red: {
    color: colors.red,
    category: 'primary',
    position: fourOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
  plum: {
    color: colors.plum,
    category: 'tertiary',
    position: fiveOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
  violet: {
    color: colors.violet,
    category: 'secondary',
    position: sixOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
  blueberry: {
    color: colors.blueberry,
    category: 'tertiary',
    position: sevenOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
  blue: {
    color: colors.blue,
    category: 'primary',
    position: eightOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
  emerald: {
    color: colors.emerald,
    category: 'tertiary',
    position: nineOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
  green: {
    color: colors.green,
    category: 'secondary',
    position: tenOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
  pear: {
    color: colors.pear,
    category: 'tertiary',
    position: elevenOClock,
    isShowing: {
      name: false,
      color: false
    }
  },
};

export default colorWheel;