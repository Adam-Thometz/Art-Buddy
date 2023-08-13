import settingsReducer, { demoClass, initialState, setRoster, setVolume, toggleColorBlind, toggleTextToSpeech } from "./settingsReducer";

describe("Main Menu & Settings Reducer", () => {
  it("should return the initial state", () => {
    expect(settingsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle changing the volume", () => {
    const init = settingsReducer(undefined, {});
    expect(init.volume).toBe(0);

    const result = settingsReducer(init, setVolume(-12));
    expect(result.volume).toBe(-12);
  });

  it("should handle toggling text-to-speech feature", () => {
    const init = settingsReducer(undefined, {});
    expect(init.textToSpeech).toBe(false);

    const result = settingsReducer(undefined, toggleTextToSpeech());
    expect(result.textToSpeech).toBe(true);
  });

  it("should handle toggling color blind feature", () => {
    const init = settingsReducer(undefined, {});
    expect(init.colorBlind).toBe(false);

    const result = settingsReducer(init, toggleColorBlind());
    expect(result.colorBlind).toBe(true);
  });

  it("should handle updating the global roster", () => {
    const init = settingsReducer(undefined, {});
    expect(init.roster).toEqual(demoClass);

    const sampleRoster = { name: "Demo Class", students: ["Hello", "Goodbye"] };
    const result = settingsReducer(init, setRoster(sampleRoster));
    expect(result.roster).toEqual(sampleRoster);
  });
});
