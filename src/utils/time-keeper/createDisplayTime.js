export default function createDisplayTime(secondsLeft) {
  const hours = makeTwoDigits(Math.floor(secondsLeft / 3600));
  const minutes = makeTwoDigits(Math.floor(secondsLeft / 60) % 60);
  const seconds = makeTwoDigits(secondsLeft % 60);
  return `${hours}:${minutes}:${seconds}`;
}

function makeTwoDigits(num) {
  return num.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
}
