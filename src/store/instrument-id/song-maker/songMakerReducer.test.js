import songMakerReducer, { initialState, defaultInstrument, addInstrument, removeInstrument, selectMelody, clearSong, toggleLoop } from "./songMakerReducer";

import { setupInstrument } from "testUtils/setup-functions/instrumentIdReducerTestSetup";

describe("Song Maker reducer", () => {
  it("should return the initial state", () => {
    expect(songMakerReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle adding a new instrument to a song", () => {
    const result = songMakerReducer(undefined, addInstrument(1));
    expect(result.song[1]).toEqual(defaultInstrument);
    expect(result.song[3]).toBe(null);
    const result2 = songMakerReducer(result, addInstrument(3));
    expect(result2.song[3]).toEqual(defaultInstrument);
  });

  it("should handle removing an instrument from a song", () => {
    const result = songMakerReducer(undefined, addInstrument(1));
    expect(result.song[1]).toEqual(defaultInstrument);
    expect(result.song[0]).toEqual(defaultInstrument);
    const result2 = songMakerReducer(result, removeInstrument(0));
    expect(result2.song[0]).toBe(null);
  });

  it("should handle selecting an instrument", () => {
    const result = setupInstrument({ id: 0, isRhythm: false });
    expect(result.song[0].instrumentId).toBe("acousticGuitar");
    expect(result.song[0].isRhythm).toBeFalsy();
    const result2 = setupInstrument({ id: 1, isRhythm: true });
    expect(result2.song[1].instrumentId).toBe("drumSet");
    expect(result2.song[1].isRhythm).toBeTruthy();
  });

  it("should handle selecting a melody or rhythm", () => {
    const withInstrument = setupInstrument({ id: 0, isRhythm: false });
    const result = songMakerReducer(
      withInstrument,
      selectMelody({ id: 0, melodyId: "sevenNationArmyMelody" })
    );
    expect(result.song[0].melodyId).toBe("sevenNationArmyMelody");
  });

  it("should handle setting melodyId to null if isRhythm changes", () => {
    const first = setupInstrument({ id: 0, isRhythm: false });
    const withMelody = songMakerReducer(
      first,
      selectMelody({ id: 0, melodyId: "sevenNationArmyMelody" })
    );
    const second = setupInstrument({
      id: 0,
      isRhtyhm: true,
      state: withMelody,
    });
    expect(second.song[0].melodyId).toBeNull();
    const withRhythm = songMakerReducer(
      first,
      selectMelody({ id: 0, melodyId: "regularRhythm" })
    );
    const third = setupInstrument({
      id: 0,
      isRhythm: false,
      state: withRhythm,
    });
    expect(third.song[0].melodyId).toBeNull();
  });

  it("should handle toggling isPlaying", () => {
    const setup = setupInstrument({ id: 0, isRhythm: false });
    const result = songMakerReducer(setup, toggleLoop());
    expect(result.isPlaying).toBe(true);
    const result2 = songMakerReducer(result, toggleLoop());
    expect(result2.isPlaying).toBe(false);
  });

  it("should clear a song", () => {
    const setup = setupInstrument({ id: 0, isRhythm: false });
    const result = songMakerReducer(setup, clearSong());
    expect(result.song).toEqual(initialState.song);
  });
});
