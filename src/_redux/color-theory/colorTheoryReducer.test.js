import colorTheoryReducer, { INITIAL_STATE } from "./colorTheoryReducer";

import { learnColors, clearWheel } from "./colorTheoryActions";

describe("Color Thoery Reducer", () => {
  it('should return the initial state', () => {
    expect(colorTheoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should toggle text and colors for a specific group', () => {
    const { colorWheel } = colorTheoryReducer(undefined, learnColors('primary'));
    expect(colorWheel.yellow.isShowing.name).toBe(true);
    expect(colorWheel.yellow.isShowing.color).toBe(true);
    expect(colorWheel.red.isShowing.name).toBe(true);
    expect(colorWheel.red.isShowing.color).toBe(true);
    expect(colorWheel.blue.isShowing.name).toBe(true);
    expect(colorWheel.blue.isShowing.color).toBe(true);
  });
  
  it('should clear the color wheel', () => {
    const start = colorTheoryReducer(undefined, learnColors('primary'));
    const result = colorTheoryReducer(start, clearWheel());
    expect(result).toEqual(INITIAL_STATE);
  });
});