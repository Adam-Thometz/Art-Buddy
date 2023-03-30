import colorTheoryReducer, { INITIAL_STATE } from "./colorTheoryReducer";

import {
  learnColors,
  clearWheel,
  toggleAllColors,
  toggleColor,
  toggleText,
  toggleGroup,
} from "./colorTheoryActions";

describe("Color Theory Reducer", () => {
  it("should return the initial state", () => {
    expect(colorTheoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should toggle text and colors for a specific group", () => {
    const { colorWheel } = colorTheoryReducer(undefined,learnColors("primary"));
    expect(colorWheel.yellow.isShowing.text).toBe(true);
    expect(colorWheel.yellow.isShowing.color).toBe(true);
    expect(colorWheel.red.isShowing.text).toBe(true);
    expect(colorWheel.red.isShowing.color).toBe(true);
    expect(colorWheel.blue.isShowing.text).toBe(true);
    expect(colorWheel.blue.isShowing.color).toBe(true);
  });

  it("should toggle all colors", () => {
    const { colorWheel } = colorTheoryReducer(undefined, toggleAllColors());
    for (let color in colorWheel) {
      expect(colorWheel[color].isShowing.color).toBe(true);
    }
  });

  it("should toggle a specific color", () => {
    const { colorWheel } = colorTheoryReducer(undefined, toggleColor("blue"));
    expect(colorWheel.blue.isShowing.color).toBe(true);
  });

  it("should toggle colors for a specific group", () => {
    const { colorWheel } = colorTheoryReducer(undefined,toggleGroup("primary"));
    expect(colorWheel.yellow.isShowing.color).toBe(true);
    expect(colorWheel.red.isShowing.color).toBe(true);
    expect(colorWheel.blue.isShowing.color).toBe(true);
  });

  it("should toggle text for a specific color", () => {
    const { colorWheel } = colorTheoryReducer(undefined, toggleText("blue"));
    expect(colorWheel.blue.isShowing.text).toBe(true);
  });

  it("should clear the color wheel", () => {
    const start = colorTheoryReducer(undefined, learnColors("primary"));
    const result = colorTheoryReducer(start, clearWheel());
    expect(result).toEqual(INITIAL_STATE);
  });
});
