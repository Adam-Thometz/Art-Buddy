import urls from "_routes/routeUrls";

import wordToMusicIcon from "_media/menu/activity-icons/word-to-music.png";
import sequenceMakerIcon from "_media/menu/activity-icons/sequence-maker.png";
import instrumentIdIcon from "_media/menu/activity-icons/instrument-id.png";
import jumpIntoRhythmIcon from "_media/menu/activity-icons/jump-into-rhythm.png";
import colorTheoryIcon from "_media/menu/activity-icons/color-theory.png";
import freePaintIcon from "_media/menu/activity-icons/free-paint.png";

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
} = urls;

const wordToMusic = {
  name: "WORD-TO-MUSIC DECODER",
  lsKey: "wtm",
  icon: wordToMusicIcon,
  url: wordToMusicUrl,
  activityType: types[0],
  genre: genres[0],
  description:
    "Type some words into the input box at the top, find as many letters as you can, and then listen to the resulting melody. Be sure to make note of whether the letter is upper or lower case!",
  active: true,
};
const instrumentId = {
  name: "WHAT'S THAT INSTRUMENT?",
  lsKey: "wti",
  icon: instrumentIdIcon,
  url: instrumentIdUrl,
  activityType: types[0],
  genre: genres[0],
  description:
    "Learn about different instruments in the LEARN section. You can then practice your listening skills in the PLAY section and unlock different instruments for the Song Maker.",
  active: true,
};
const jumpIntoRhythm = {
  name: "JUMP INTO RHYTHM",
  lsKey: "jir",
  icon: jumpIntoRhythmIcon,
  url: jumpIntoRhythmUrl,
  activityType: types[0],
  genre: genres[0],
  description:
    "Compose different rhythms up to 4 measures long and make our frogs jump to your rhythms. Bonus points if you can count how many times the frogs hop!",
  active: true,
};
const sequenceMaker = {
  name: "SEQUENCE MAKER",
  lsKey: "sm",
  icon: sequenceMakerIcon,
  url: sequenceMakerUrl,
  activityType: types[0],
  genre: genres[0],
  description: "Put different sounds together and hear what you get.",
  active: true,
};
const colorTheory = {
  name: "COLOR THEORY",
  lsKey: "ct",
  icon: colorTheoryIcon,
  url: colorTheoryUrl,
  activityType: types[0],
  genre: genres[1],
  description: "Learn about the colors with mixing and matching!",
  active: true,
};
const freePaint = {
  name: "FREE PAINT",
  lsKey: "fp",
  icon: freePaintIcon,
  url: freePaintUrl,
  activityType: types[0],
  genre: genres[1],
  description:
    "Draw different things! We also have stencils for different letters and shapes. Unlock more colors by playing Color Theory!",
  active: true,
};
const scoreKeeper = {
  name: "SCORE KEEPER",
  lsKey: "sk",
  icon: null,
  url: scoreKeeperUrl,
  activityType: types[2],
  genre: genres[2],
  description:
    "A simple score keeper. Just load up your class and start keeping score. Updates when you have new winners!",
  active: true,
};
const timeKeeper = {
  name: "TIME KEEPER",
  lsKey: "tk",
  icon: null,
  url: timeKeeperUrl,
  activityType: types[2],
  genre: genres[2],
  description:
    "Tell the time with music! Add different music blocks to create a song out of the timer",
  active: false,
};
const moodMeter = {
  name: "MOOD METER",
  lsKey: "mm",
  icon: null,
  url: moodMeterUrl,
  activityType: types[2],
  genre: genres[2],
  description: "Figure out your mood",
  active: true,
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
};
