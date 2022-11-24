export default function getNewSize({ x, y, clientWidth, clientHeight, currSize }) {
  const xDiff = Math.abs(x - clientWidth);
  const yDiff = Math.abs(y - clientHeight);
  const width = x > clientWidth
    ? currSize.width - xDiff
    : currSize.width + xDiff;
  const height = y > clientHeight 
    ? currSize.height + yDiff
    : currSize.height - yDiff;

    return { height, width };
}