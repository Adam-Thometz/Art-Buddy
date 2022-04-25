import urls from "../../_routes/routeUrls";

import wordToMusicIcon from './_icons/activity-icons/word-to-music.png'
import sequenceMakerIcon from './_icons/activity-icons/sequence-maker.png'
import instrumentIdIcon from './_icons/activity-icons/instrument-id.png'
import colorTheoryIcon from './_icons/activity-icons/color-theory.png'
import paintingTimeIcon from './_icons/activity-icons/painting-time.png'

const types = ['games', 'tools'];
const genres = ['music', 'art', 'other'];

const activities = [
  {
    name: 'WORD TO MUSIC DECODER',
    icon: wordToMusicIcon,
    url: urls.wordToMusicUrl,
    activityType: types[0],
    genre: genres[0],
    description: 'Turn words into music!'
  },
  {
    name: "WHAT'S THAT INSTRUMENT?",
    icon: instrumentIdIcon,
    url: urls.instrumentIdUrl,
    activityType: types[0],
    genre: genres[0],
    description: 'Learn about instruments while practicing listening skills!'
  },
  {
    name: 'JUMP INTO RHYTHM',
    icon: null,
    url: null,
    activityType: types[0],
    genre: genres[0],
    description: 'Jump with a frog to different rhythms!'
  },
  {
    name: 'SEQUENCE MAKER',
    icon: sequenceMakerIcon,
    url: urls.sequencerUrl,
    activityType: types[0],
    genre: genres[0],
    description: 'Put sounds together and hear what you get!'
  },
  {
    name: 'COLOR THEORY',
    icon: colorTheoryIcon,
    url: null,
    activityType: types[0],
    genre: genres[1],
    description: 'Learn about the colors with mixing and matching!'
  },
  {
    name: 'PAINTING TIME',
    icon: paintingTimeIcon,
    url: null,
    activityType: types[0],
    genre: genres[1],
    description: 'Draw different things like letters and shapes!'
  },
  {
    name: 'PLACE HOLDER',
    icon: null,
    url: null,
    activityType: types[0],
    genre: genres[1],
    description: ''
  },
  {
    name: 'PLACE HOLDER',
    icon: null,
    url: null,
    activityType: types[0],
    genre: genres[1],
    description: ''
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