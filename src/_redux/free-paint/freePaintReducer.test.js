import freePaintReducer, { initialState, setColor, setStencil, setIsErasing, clearGame, setEditStencilMode, setShownOptions, setAvailableColors } from "./freePaintReducer";

describe("Free Paint reducer", () => {
  it("should return the initial state", () => {
    expect(freePaintReducer(undefined, {})).toEqual(initialState);
  });

  it("should add colors to the available colors list", () => {
    const colorsToAdd = ["yellow", "red", "blue"];
    const result = freePaintReducer(undefined, setAvailableColors(colorsToAdd));
    expect(result.availableColors).toEqual(
      initialState.availableColors.concat(colorsToAdd)
    );
  });

  it("should change the color", () => {
    const result = freePaintReducer(undefined, setColor("blue"));
    expect(result.color).toBe("blue");
  });

  it("should change the shown options", () => {
    const result = freePaintReducer(undefined, setShownOptions("color"));
    expect(result.shownOptions).toBe("color");
  });

  it("should change the display icon", () => {
    const result = freePaintReducer(undefined, setStencil("A"));
    expect(result.stencil).toBe("A");
  });

  it("should change the erasing state", () => {
    const result = freePaintReducer(undefined, setIsErasing(true));
    expect(result.isErasing).toBe(true);
  });

  it("should set the stencil edit state", () => {
    const result = freePaintReducer(undefined, setEditStencilMode(true));
    expect(result.isEditingStencil).toBe(true);
  });

  it("should handle resetting", () => {
    const result = freePaintReducer(undefined, clearGame());
    expect(result).toEqual(initialState);
  });
});
