import { Time } from "tone";

const MOST_POSSIBLE_TIME = Time('4m').toSeconds();

export default function calculateTimeLeft(loop) {
  const progress = loop.map(part => (MOST_POSSIBLE_TIME * part.progress) * 1000);
  const timeLeft = (progress.reduce((accum, value) => accum+value, 0)) / progress.length;
  return  MOST_POSSIBLE_TIME*1000 - timeLeft;
}