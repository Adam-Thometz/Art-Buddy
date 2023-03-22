import colorTheoryReducer, { INITIAL_STATE } from "./colorWheelReducer";

import {
  learnColors,
  clearWheel,
  toggleAllColors,
  toggleColor,
  toggleText,
  toggleGroup,
} from "./colorWheelActions";

describe("Color Thoery Reducer", () => {
  it("should return the initial state", () => {
    expect(colorTheoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should toggle text and colors for a specific group", () => {
    const { colorWheel } = colorTheoryReducer(
      undefined,
      learnColors("primary")
    );
    expect(colorWheel.yellow.isShowing.text).toBe(true);
    expect(colorWheel.yellow.isShowing.color).toBe(true);
    expect(colorWheel.red.isShowing.text).toBe(true);
    expect(colorWheel.red.isShowing.color).toBe(true);
    expect(colorWheel.blue.isShowing.text).toBe(true);
    expect(colorWheel.blue.isShowing.color).toBe(true);
  });

  it("should toggle all colors", () => {
    const { colorWheel } = colorTheoryReducer(undefined, toggleAllColors());
    expect(colorWheel.yellow.isShowing.color).toBe(true);
    expect(colorWheel.dandelion.isShowing.color).toBe(true);
    expect(colorWheel.orange.isShowing.color).toBe(true);
    expect(colorWheel.tangelo.isShowing.color).toBe(true);
    expect(colorWheel.red.isShowing.color).toBe(true);
    expect(colorWheel.plum.isShowing.color).toBe(true);
    expect(colorWheel.violet.isShowing.color).toBe(true);
    expect(colorWheel.blueberry.isShowing.color).toBe(true);
    expect(colorWheel.blue.isShowing.color).toBe(true);
    expect(colorWheel.emerald.isShowing.color).toBe(true);
    expect(colorWheel.green.isShowing.color).toBe(true);
    expect(colorWheel.pear.isShowing.color).toBe(true);
  });

  it("should toggle a specific color", () => {
    const { colorWheel } = colorTheoryReducer(undefined, toggleColor("blue"));
    expect(colorWheel.blue.isShowing.color).toBe(true);
  });

  it("should toggle colors for a specific group", () => {
    const { colorWheel } = colorTheoryReducer(
      undefined,
      toggleGroup("primary")
    );
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
