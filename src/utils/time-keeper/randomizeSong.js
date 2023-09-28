import { regularTimeBlocks } from "data/time-keeper/timeBlocks";

export default function randomizeSong({ seconds, mood }) {
  return randomize(seconds, mood);
}

function randomize(seconds, mood, song = []) {
  if (seconds === 0) return song;

  const numChoices = getNumChoices(seconds);
  const randomIdx = Math.floor(Math.random() * numChoices);
  const selectedSong = regularTimeBlocks[randomIdx];
  song.push({
    seconds: selectedSong.seconds,
    mood,
    music: selectedSong[mood],
  })

  return randomize(seconds - selectedSong.seconds, mood, song);
}

function getNumChoices(seconds) {
  if (seconds >= 60) return 3;
  if (seconds < 60 && seconds >= 30) return 2;
  if (seconds < 30 && seconds >= 15) return 1;
}
