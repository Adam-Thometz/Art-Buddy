import timeKeeperReducer, { initialState, toggleTimer, toggleMute, setMillisecondsLeftInSecond } from "./timeKeeperReducer";

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

  it("should toggle mute", () => {
    const result = timeKeeperReducer(undefined, toggleMute());
    expect(result.isMuted).toBe(true);
    const result2 = timeKeeperReducer(result, toggleMute());
    expect(result2.isMuted).toBe(false);
  });
  
  it("should set milliseconds", () => {
    const result = timeKeeperReducer(undefined, setMillisecondsLeftInSecond(500));
    expect(result.millisecondsLeft).toBe(500);
  });
});
