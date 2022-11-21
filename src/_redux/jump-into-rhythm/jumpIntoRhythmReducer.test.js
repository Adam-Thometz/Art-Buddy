import jumpIntoRhythmReducer, { INITIAL_STATE } from "./jumpIntoRhythmReducer";
import { addToRhythm, toggleHasExtraMeasure, clearGame, deleteFromRhythm, toggleLilyPadDisplay } from "./jumpIntoRhythmActions";
import { testQuarterNote } from "_testUtils/test-states/jumpIntoRhythmReducerTestState";

describe('Jump Into Rhythm Reducer', () => {
  it('should return the initial state', () => {
    expect(jumpIntoRhythmReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should add a note to a rhythm', () => {
    const result = jumpIntoRhythmReducer(undefined, addToRhythm(testQuarterNote));
    expect(result.rhythm[0]).toEqual(testQuarterNote);
    const result2 = jumpIntoRhythmReducer(result, addToRhythm(testQuarterNote));
    expect(result2.rhythm[1]).toEqual(testQuarterNote);
  });

  it('should delete a note from a rhythm', () => {
    const result = jumpIntoRhythmReducer(undefined, addToRhythm(testQuarterNote));
    const result2 = jumpIntoRhythmReducer(result, deleteFromRhythm(0));
    expect(result2.rhythm[0]).toBeNull();
  });
  
  it('should toggle an extra rhythm', () => {
    const result = jumpIntoRhythmReducer(undefined, toggleHasExtraMeasure(true));
    expect(result.rhythm.length).toBe(8);
    const result2 = jumpIntoRhythmReducer(result, toggleHasExtraMeasure(false));
    expect(result2.rhythm.length).toBe(4);
  });

  it('should toggle lilypad display', () => {
    const result = jumpIntoRhythmReducer(undefined, toggleLilyPadDisplay());
    expect(result.isDisplayingLilyPads).toBe(true);
    const result2 = jumpIntoRhythmReducer(result, toggleLilyPadDisplay());
    expect(result2.isDisplayingLilyPads).toBe(false);
  })

  it('should handle resetting', () => {
    const result = jumpIntoRhythmReducer(undefined, clearGame());
    expect(result).toEqual(INITIAL_STATE);
  });
});