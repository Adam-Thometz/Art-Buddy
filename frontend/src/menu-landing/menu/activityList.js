import urls from "../../_routes/routeUrls";

const types = ['games', 'tools'];
const genres = ['music', 'art', 'other'];

const activities = [
  {
    name: 'WORD TO MUSIC DECODER',
    icon: '',
    url: urls.wordToMusicUrl,
    activityType: types[0],
    genre: genres[0],
    description: 'Turn words into music!'
  },
  {
    name: "WHAT'S THAT INSTRUMENT?",
    icon: '',
    url: urls.instrumentIdUrl,
    activityType: types[0],
    genre: genres[0],
    description: 'Learn about instruments while practicing listening skills!'
  },
  {
    name: 'JUMP INTO RHYTHM',
    icon: '',
    url: null,
    activityType: types[0],
    genre: genres[0],
    description: 'Jump with a frog to different rhythms!'
  },
  {
    name: 'SEQUENCE MAKER',
    icon: '',
    url: urls.sequencerUrl,
    activityType: types[0],
    genre: genres[0],
    description: 'Put sounds together and hear what you get!'
  },
  {
    name: 'SCORE KEEPER',
    icon: '',
    url: urls.scoreKeeperUrl,
    activityType: types[1],
    genre: genres[2],
    description: 'An all-purpose score keeper.'
  },
  {
    name: 'TIME KEEPER',
    icon: '',
    url: null,
    activityType: types[1],
    genre: genres[2],
    description: 'An all-purpose time keeper.'
  }
];

export default activities;