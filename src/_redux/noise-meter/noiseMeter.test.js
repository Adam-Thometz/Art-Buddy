import noiseMeterReducer, { initialState, toggleRecording } from "./noiseMeterReducer";

describe("Nosie Meter reducer", () => {
  it("should return the initial state", () => {
    expect(noiseMeterReducer(undefined, {})).toEqual(initialState);
  });

  it("should toggle recording", () => {
    const result = noiseMeterReducer(undefined, toggleRecording());
    expect(result.isRecording).toBe(true);
    const result2 = noiseMeterReducer(result, toggleRecording());
    expect(result2.isRecording).toBe(false);
  });
})