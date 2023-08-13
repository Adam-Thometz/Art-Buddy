import jumpIntoRhythmReducer, { initialState, addToRhythm, setMeasures, clearGame, deleteFromRhythm, toggleLilyPadDisplay, toggleAnimation } from "./jumpIntoRhythmReducer";

import { testQuarterNote } from "testUtils/test-states/jumpIntoRhythmReducerTestState";

describe("Jump Into Rhythm Reducer", () => {
  it("should return the initial state", () => {
    expect(jumpIntoRhythmReducer(undefined, {})).toEqual(initialState);
  });

  it("should add a note to a rhythm", () => {
    const result = jumpIntoRhythmReducer(
      undefined,
      addToRhythm(testQuarterNote)
    );
    expect(result.rhythm[0]).toEqual(testQuarterNote);
    const result2 = jumpIntoRhythmReducer(result, addToRhythm(testQuarterNote));
    expect(result2.rhythm[1]).toEqual(testQuarterNote);
  });

  it("should delete a note from a rhythm", () => {
    const result = jumpIntoRhythmReducer(
      undefined,
      addToRhythm(testQuarterNote)
    );
    const result2 = jumpIntoRhythmReducer(result, deleteFromRhythm(0));
    expect(result2.rhythm[0]).toBeNull();
  });

  it("should add or delete measures", () => {
    const twoMeasures = jumpIntoRhythmReducer(undefined, setMeasures(4));
    expect(twoMeasures.rhythm.length).toBe(8);
    const threeMeasures = jumpIntoRhythmReducer(twoMeasures, setMeasures(4));
    expect(threeMeasures.rhythm.length).toBe(12);
    const fourMeasures = jumpIntoRhythmReducer(threeMeasures, setMeasures(4));
    expect(fourMeasures.rhythm.length).toBe(16);
    const reachedLimit = jumpIntoRhythmReducer(fourMeasures, setMeasures(4));
    expect(reachedLimit.rhythm.length).toBe(16);
    const removeOneMeasure = jumpIntoRhythmReducer(
      reachedLimit,
      setMeasures(-4)
    );
    expect(removeOneMeasure.rhythm.length).toBe(12);
  });

  it("should toggle lilypad display", () => {
    const result = jumpIntoRhythmReducer(undefined, toggleLilyPadDisplay());
    expect(result.isDisplayingLilyPads).toBe(true);
    const result2 = jumpIntoRhythmReducer(result, toggleLilyPadDisplay());
    expect(result2.isDisplayingLilyPads).toBe(false);
  });

  it("should toggle animation", () => {
    const result = jumpIntoRhythmReducer(undefined, toggleAnimation());
    expect(result.isAnimating).toBe(true);
    const result2 = jumpIntoRhythmReducer(result, toggleAnimation());
    expect(result2.isAnimating).toBe(false);
  });

  it("should handle resetting", () => {
    const result = jumpIntoRhythmReducer(undefined, clearGame());
    expect(result).toEqual(initialState);
  });
});
