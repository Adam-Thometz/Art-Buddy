import getNewSize from './getNewSize';

describe('getNewSize function', () => {
  const tests = [
    // assertion        x    y    clientX cleintY currSize                   result
    ["larger clients",  100, 100, 105,    110,    { width: 50, height: 50 }, { height: 60, width: 45 }],
    ["smaller clients", 100, 100, 95,     90,     { width: 50, height: 50 }, { height: 40, width: 55 }]
  ];
  it.each(tests)("return a new height and width - %s", (_, x, y, clientX, clientY, currSize, result) => {
    const inputs = { x, y, clientX, clientY, currSize };
    expect(getNewSize(inputs)).toEqual(result);
  });
});
