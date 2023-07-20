import urls from "_routes/routeUrls";

import { CONNECT_OBJECTS_WITH_EVENTS, COUNT, DRAW_A_PICTURE, EXTEND_PATTERNS, IDENTIFY_LETTERS, IDENTIFY_MORE_AND_LESS, IDENTIFY_QUANTITY, READ_LEFT_TO_RIGHT, SEQUENCE_STORY, SIGHT_WORDS, VOCAB_WORDS, WORD_FAMILIES, WRITE_SIMPLE_WORDS } from "_data/goals/goals";
import { COLOR_THEORY_ICON, FREE_PAINT_ICON, JUMP_INTO_RHYTHM_ICON, MOOD_METER, NOISE_METER, SCORE_KEEPER, SEQUENCE_MAKER_ICON, TIME_KEEPER, WHATS_THAT_INSTRUMENT_ICON, WORD_TO_MUSIC_ICON } from "_assets/menu/menu.assets";

const types = ["games", "tools"];
const genres = ["music", "art", "other"];

const {
  wordToMusicUrl,
  instrumentIdUrl,
  jumpIntoRhythmUrl,
  sequenceMakerUrl,
  freePaintUrl,
  colorTheoryUrl,
  scoreKeeperUrl,
  timeKeeperUrl,
  moodMeterUrl,
  noiseMeterUrl
} = urls;

const wordToMusic = {
  name: "WORD-TO-MUSIC DECODER",
  lsKey: "wtm",
  icon: WORD_TO_MUSIC_ICON,
  url: wordToMusicUrl,
  activityType: types[0],
  genre: genres[0],
  description:
    "Type some words into the input box at the top, find as many letters as you can, and then listen to the resulting melody. Be sure to make note of whether the letter is upper or lower case!",
  goalsCovered: [
    IDENTIFY_LETTERS,
    WORD_FAMILIES,
    VOCAB_WORDS,
    SIGHT_WORDS,
    WRITE_SIMPLE_WORDS
  ]
};
const instrumentId = {
  name: "WHAT'S THAT INSTRUMENT?",
  lsKey: "wti",
  icon: WHATS_THAT_INSTRUMENT_ICON,
  url: instrumentIdUrl,
  activityType: types[0],
  genre: genres[0],
  description:
    "Learn about different instruments in the LEARN section. You can then practice your listening skills in the PLAY section and unlock different instruments for the Song Maker.",
  goalsCovered: [
    CONNECT_OBJECTS_WITH_EVENTS,
    VOCAB_WORDS
  ]
};
const jumpIntoRhythm = {
  name: "JUMP INTO RHYTHM",
  lsKey: "jir",
  icon: JUMP_INTO_RHYTHM_ICON,
  url: jumpIntoRhythmUrl,
  activityType: types[0],
  genre: genres[0],
  description:
    "Compose different rhythms up to 4 measures long and make our frogs jump to your rhythms. Bonus points if you can count how many times the frogs hop!",
  goalsCovered: [
    COUNT,
    EXTEND_PATTERNS,
    IDENTIFY_MORE_AND_LESS,
    IDENTIFY_QUANTITY
  ]
};
const sequenceMaker = {
  name: "SEQUENCE MAKER",
  lsKey: "sm",
  icon: SEQUENCE_MAKER_ICON,
  url: sequenceMakerUrl,
  activityType: types[0],
  genre: genres[0],
  description: "Put different sounds together and hear what you get.",
  goalsCovered: [
    VOCAB_WORDS,
    READ_LEFT_TO_RIGHT,
    CONNECT_OBJECTS_WITH_EVENTS,
    SEQUENCE_STORY,
    EXTEND_PATTERNS,
  ]
};
const colorTheory = {
  name: "COLOR THEORY",
  lsKey: "ct",
  icon: COLOR_THEORY_ICON,
  url: colorTheoryUrl,
  activityType: types[0],
  genre: genres[1],
  description: "Learn about the colors with mixing and matching!",
  goalsCovered: [
    VOCAB_WORDS,
    EXTEND_PATTERNS,
  ]
};
const freePaint = {
  name: "FREE PAINT",
  lsKey: "fp",
  icon: FREE_PAINT_ICON,
  url: freePaintUrl,
  activityType: types[0],
  genre: genres[1],
  description:
    "Draw different things! We also have stencils for different letters and shapes. Unlock more colors by playing Color Theory!",
  goalsCovered: [
    IDENTIFY_LETTERS,
    DRAW_A_PICTURE,
    IDENTIFY_LETTERS
  ]
};
const scoreKeeper = {
  name: "SCORE KEEPER",
  lsKey: "sk",
  icon: SCORE_KEEPER,
  url: scoreKeeperUrl,
  activityType: types[2],
  genre: genres[2],
  description:
    "A simple score keeper. Just load up your class and start keeping score. Updates when you have new winners!",
  goalsCovered: [
    COUNT,
    IDENTIFY_MORE_AND_LESS,
    IDENTIFY_QUANTITY
  ]
};
const timeKeeper = {
  name: "TIME KEEPER",
  lsKey: "tk",
  icon: TIME_KEEPER,
  url: timeKeeperUrl,
  activityType: types[2],
  genre: genres[2],
  description:
    "Tell the time with music! Add different music blocks to create a song out of the timer",
  goalsCovered: [
    COUNT,
    EXTEND_PATTERNS,
    IDENTIFY_MORE_AND_LESS
  ]
};
const moodMeter = {
  name: "MOOD METER",
  lsKey: "mm",
  icon: MOOD_METER,
  url: moodMeterUrl,
  activityType: types[2],
  genre: genres[2],
  description: "Figure out your mood using our simple interface",
  goalsCovered: [
    VOCAB_WORDS
  ]
};
const noiseMeter = {
  name: "NOISE METER",
  lsKey: "nm",
  icon: NOISE_METER,
  url: noiseMeterUrl,
  activityType: types[2],
  genre: genres[2],
  description: "Measure the amount of noise in a room.",
  goalsCovered: [],
};

const activities = {
  wordToMusic,
  instrumentId,
  jumpIntoRhythm,
  sequenceMaker,
  colorTheory,
  freePaint,
  scoreKeeper,
  timeKeeper,
  moodMeter,
  noiseMeter
};

export default activities;

export {
  wordToMusic,
  instrumentId,
  jumpIntoRhythm,
  sequenceMaker,
  colorTheory,
  freePaint,
  scoreKeeper,
  timeKeeper,
  moodMeter,
  noiseMeter
};
