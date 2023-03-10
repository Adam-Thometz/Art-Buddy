export default function makeTwoDigits(num) {
  return num.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
}
