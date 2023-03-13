import { regularTimeBlocks } from "_data/time-keeper/timeBlocks";

export default function randomizeSong({ seconds, mood }) {
  const song = [];
  while (seconds > 0) {
    const numChoices = getNumChoices(seconds);
    const randomIdx = Math.floor(Math.random() * numChoices);
    const selectedSong = regularTimeBlocks[randomIdx];
    debugger;
    song.push({
      seconds: selectedSong.seconds,
      mood,
      music: selectedSong[mood],
    });
    seconds = seconds - selectedSong.seconds;
  }
  return song;
}

function getNumChoices(secondsLeft) {
  if (secondsLeft >= 60) return 3;
  if (secondsLeft < 60 && secondsLeft >= 30) return 2;
  if (secondsLeft < 30 && secondsLeft >= 15) return 1;
}
