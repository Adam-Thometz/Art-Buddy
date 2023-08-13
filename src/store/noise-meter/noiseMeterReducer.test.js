import noiseMeterReducer, { initialState, setMeterVolume, toggleRecording } from "./noiseMeterReducer";

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

  it("should update volume", () => {
    const result = noiseMeterReducer(undefined, setMeterVolume(0.5));
    expect(result.meterVolume).toBe(0.5);
  });
})