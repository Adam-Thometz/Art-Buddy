import { Time } from "tone";

const MOST_POSSIBLE_TIME = Time('4m').toSeconds() * 1000;

export default function calculateTimeLeft(loop) {
  const progress = loop.map(part => MOST_POSSIBLE_TIME * part.progress);
  const timeLeft = (progress.reduce((accum, value) => accum+value, 0)) / progress.length;
  return MOST_POSSIBLE_TIME - timeLeft;
}