import colorWheelReducer, { initialState, learnColors, toggleAllColors, toggleColor, toggleGroup, toggleText, clearWheel } from "./colorWheelReducer";

describe("Color Wheel Reducer", () => {
  it("should return the initial state", () => {
    expect(colorWheelReducer(undefined, {})).toEqual(initialState);
  });

  it("should toggle text and colors for a specific group", () => {
    const { colorWheel } = colorWheelReducer(undefined, learnColors("primary"));
    expect(colorWheel.yellow.isShowing.text).toBe(true);
    expect(colorWheel.yellow.isShowing.color).toBe(true);
    expect(colorWheel.red.isShowing.text).toBe(true);
    expect(colorWheel.red.isShowing.color).toBe(true);
    expect(colorWheel.blue.isShowing.text).toBe(true);
    expect(colorWheel.blue.isShowing.color).toBe(true);
  });

  it("should toggle all colors", () => {
    const { colorWheel } = colorWheelReducer(undefined, toggleAllColors());
    for (let color in colorWheel) {
      expect(colorWheel[color].isShowing.color).toBe(true);
    }
  });

  it("should toggle a specific color", () => {
    const { colorWheel } = colorWheelReducer(undefined, toggleColor("blue"));
    expect(colorWheel.blue.isShowing.color).toBe(true);
  });

  it("should toggle colors for a specific group", () => {
    const { colorWheel } = colorWheelReducer(undefined,toggleGroup("primary"));
    expect(colorWheel.yellow.isShowing.color).toBe(true);
    expect(colorWheel.red.isShowing.color).toBe(true);
    expect(colorWheel.blue.isShowing.color).toBe(true);
  });

  it("should toggle text for a specific color", () => {
    const { colorWheel } = colorWheelReducer(undefined, toggleText("blue"));
    expect(colorWheel.blue.isShowing.text).toBe(true);
  });

  it("should clear the color wheel", () => {
    const start = colorWheelReducer(undefined, learnColors("primary"));
    const result = colorWheelReducer(start, clearWheel());
    expect(result).toEqual(initialState);
  });
});
