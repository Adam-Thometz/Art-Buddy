export default function getNewSize({ x, y, clientX, clientY, currSize }) {
  const xDiff = Math.abs(x - clientX);
  const yDiff = Math.abs(y - clientY);
  const width = x > clientX ? currSize.width + xDiff : currSize.width - xDiff;
  const height =
    y > clientY ? currSize.height - yDiff : currSize.height + yDiff;

  return { height, width };
}
