import urls from "_data/_routes/routeUrls";

import wordToMusicIcon from '_media/menu/activity-icons/word-to-music.png'
import sequenceMakerIcon from '_media/menu/activity-icons/sequence-maker.png'
import instrumentIdIcon from '_media/menu/activity-icons/instrument-id.png'
import jumpIntoRhythmIcon from '_media/menu/activity-icons/jump-into-rhythm.png'
import colorTheoryIcon from '_media/menu/activity-icons/color-theory.png'
import freePaintIcon from '_media/menu/activity-icons/free-paint.png'

const types = ['games', 'tools'];
const genres = ['music', 'art', 'other'];

const { wordToMusic, instrumentId, jumpIntoRhythm, sequenceMaker, freePaint, scoreKeeper, timeKeeper } = urls;

const activities = [
  {
    name: 'WORD-TO-MUSIC DECODER',
    icon: wordToMusicIcon,
    url: wordToMusic,
    activityType: types[0],
    genre: genres[0],
    description: 'Turn words into music!',
    active: true
  },
  {
    name: "WHAT'S THAT INSTRUMENT?",
    icon: instrumentIdIcon,
    url: instrumentId,
    activityType: types[0],
    genre: genres[0],
    description: 'Learn about instruments while practicing listening skills!',
    active: true
  },
  {
    name: 'JUMP INTO RHYTHM',
    icon: jumpIntoRhythmIcon,
    url: jumpIntoRhythm,
    activityType: types[0],
    genre: genres[0],
    description: 'Jump with a frog to different rhythms!',
    active: true
  },
  {
    name: 'SEQUENCE MAKER',
    icon: sequenceMakerIcon,
    url: sequenceMaker,
    activityType: types[0],
    genre: genres[0],
    description: 'Put different sounds together and hear what you get!',
    active: true
  },
  {
    name: 'COLOR THEORY',
    icon: colorTheoryIcon,
    url: null,
    activityType: types[0],
    genre: genres[1],
    description: 'Learn about the colors with mixing and matching!',
    active: false
  },
  {
    name: 'FREE PAINT',
    icon: freePaintIcon,
    url: freePaint,
    activityType: types[0],
    genre: genres[1],
    description: 'Draw different things like letters and shapes!',
    active: true
  },
  {
    name: 'PLACE HOLDER',
    icon: null,
    url: null,
    activityType: types[0],
    genre: genres[1],
    description: '',
    active: false
  },
  {
    name: 'PLACE HOLDER',
    icon: null,
    url: null,
    activityType: types[0],
    genre: genres[1],
    description: '',
    active: false
  },
  {
    name: 'SCORE KEEPER',
    icon: null,
    url: scoreKeeper,
    activityType: types[2],
    genre: genres[2],
    description: '',
    active: true
  },
  {
    name: 'TIME KEEPER',
    icon: null,
    url: timeKeeper,
    activityType: types[2],
    genre: genres[2],
    description: '',
    active: false
  }
];

export default activities;