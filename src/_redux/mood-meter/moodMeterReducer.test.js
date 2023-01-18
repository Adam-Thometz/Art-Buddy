import moodMeterReducer, { INITIAL_STATE } from "./moodMeterReducer";
import { setValence, setEnergy, clearOptions } from "./moodMeterActions";

const LOW = 0;
const MEDIUM = 1;
const HIGH = 2;

describe("Mood Meter reducer", () => {
  it("should return the initial state", () => {
    expect(moodMeterReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should set the valence", () => {
    const result = moodMeterReducer(undefined, setValence(MEDIUM));
    expect(result.valence).toBe(MEDIUM);
  });

  it("should set the energy", () => {
    const result = moodMeterReducer(undefined, setEnergy(HIGH));
    expect(result.energy).toBe(HIGH);
  });

  it("should clear options", () => {
    const first = moodMeterReducer(undefined, setValence(LOW));
    expect(first.valence).toBe(LOW);
    const second = moodMeterReducer(first, setEnergy(MEDIUM));
    expect(second.energy).toBe(MEDIUM);
    const result = moodMeterReducer(second, clearOptions());
    expect(result).toEqual(INITIAL_STATE);
  });
});
