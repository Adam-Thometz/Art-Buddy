import timeKeeperReducer, { initialState, toggleTimer } from "./timeKeeperReducer";

describe("Time Keeper reducer", () => {
  it("should return the initial state", () => {
    expect(timeKeeperReducer(undefined, {})).toEqual(initialState);
  });

  it("should toggle playing", () => {
    const result = timeKeeperReducer(undefined, toggleTimer());
    expect(result.isPlaying).toBe(true);
    const result2 = timeKeeperReducer(result, toggleTimer());
    expect(result2.isPlaying).toBe(false);
  });
});
