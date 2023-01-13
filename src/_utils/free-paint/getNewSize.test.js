import getNewSize from "./getNewSize";

describe('getNewSize function', () => {
  it('should return a new height and width - clients are larger', () => {
    const inputs = {
      x: 100,
      y: 100,
      clientX: 105,
      clientY: 110,
      currSize: {
        width: 50,
        height: 50
      },
    };
    const result = getNewSize(inputs);
    expect(result).toEqual({ height: 60, width: 45 })
  });

  it('should return a new height and width - clients are smaller', () => {
    const inputs = {
      x: 100,
      y: 100,
      clientX: 95,
      clientY: 90,
      currSize: {
        width: 50,
        height: 50
      },
    };
    const result = getNewSize(inputs);
    expect(result).toEqual({ height: 40, width: 55 });
  });
});