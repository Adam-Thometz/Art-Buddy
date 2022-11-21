import urls from "_data/_routes/routeUrls";

import wordToMusicIcon from '_media/menu/activity-icons/word-to-music.png'
import sequenceMakerIcon from '_media/menu/activity-icons/sequence-maker.png'
import instrumentIdIcon from '_media/menu/activity-icons/instrument-id.png'
import jumpIntoRhythmIcon from '_media/menu/activity-icons/jump-into-rhythm.png'
import colorTheoryIcon from '_media/menu/activity-icons/color-theory.png'
import freePaintIcon from '_media/menu/activity-icons/free-paint.png'

const types = ['games', 'tools'];
const genres = ['music', 'art', 'other'];

const { wordToMusicUrl, instrumentIdUrl, jumpIntoRhythmUrl, sequenceMakerUrl, freePaintUrl, scoreKeeperUrl, timeKeeperUrl } = urls;

const wordToMusic = {
  name: 'WORD-TO-MUSIC DECODER',
  icon: wordToMusicIcon,
  url: wordToMusicUrl,
  activityType: types[0],
  genre: genres[0],
  description: 'Turn words into music!',
  active: true
};
const instrumentId = {
  name: "WHAT'S THAT INSTRUMENT?",
  icon: instrumentIdIcon,
  url: instrumentIdUrl,
  activityType: types[0],
  genre: genres[0],
  description: 'Learn about instruments while practicing listening skills!',
  active: true
};
const jumpIntoRhythm = {
  name: 'JUMP INTO RHYTHM',
  icon: jumpIntoRhythmIcon,
  url: jumpIntoRhythmUrl,
  activityType: types[0],
  genre: genres[0],
  description: 'Jump with a frog to different rhythms!',
  active: true
};
const sequenceMaker = {
  name: 'SEQUENCE MAKER',
  icon: sequenceMakerIcon,
  url: sequenceMakerUrl,
  activityType: types[0],
  genre: genres[0],
  description: 'Put different sounds together and hear what you get!',
  active: true
};
const colorTheory = {
  name: 'COLOR THEORY',
  icon: colorTheoryIcon,
  url: null,
  activityType: types[0],
  genre: genres[1],
  description: 'Learn about the colors with mixing and matching!',
  active: false
};
const freePaint = {
  name: 'FREE PAINT',
  icon: freePaintIcon,
  url: freePaintUrl,
  activityType: types[0],
  genre: genres[1],
  description: 'Draw different things like letters and shapes!',
  active: true
};
const placeholder = {
  name: 'PLACE HOLDER',
  icon: null,
  url: null,
  activityType: types[0],
  genre: genres[1],
  description: '',
  active: false
};
const placeholder2 = {
  name: 'PLACE HOLDER',
  icon: null,
  url: null,
  activityType: types[0],
  genre: genres[1],
  description: '',
  active: false
};
const scoreKeeper = {
  name: 'SCORE KEEPER',
  icon: null,
  url: scoreKeeperUrl,
  activityType: types[2],
  genre: genres[2],
  description: '',
  active: true
};
const timeKeeper = {
  name: 'TIME KEEPER',
  icon: null,
  url: timeKeeperUrl,
  activityType: types[2],
  genre: genres[2],
  description: '',
  active: false
};

export {
  wordToMusic,
  instrumentId,
  jumpIntoRhythm,
  sequenceMaker,
  colorTheory,
  freePaint,
  placeholder,
  placeholder2,
  scoreKeeper,
  timeKeeper
};