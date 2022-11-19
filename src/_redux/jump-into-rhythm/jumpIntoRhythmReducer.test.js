import jumpIntoRhythmReducer, { INITIAL_STATE } from "./jumpIntoRhythmReducer";
import { addToRhythm, toggleHasExtraMeasure } from "./jumpIntoRhythmActions";
import { testQuarterNote } from "_testUtils/test-states/jumpIntoRhythmReducerTestState";

describe('Jump Into Rhythm Reducer', () => {
  it('should return the initial state', () => {
    expect(jumpIntoRhythmReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should add notes to a rhythm', () => {
    const result = jumpIntoRhythmReducer(undefined, addToRhythm(testQuarterNote));
    expect(result.rhythm[0]).toEqual(testQuarterNote);
    const result2 = jumpIntoRhythmReducer(result, addToRhythm(testQuarterNote));
    expect(result2.rhythm[1]).toEqual(testQuarterNote);
  });
  
  it('should toggle an extra rhythm', () => {
    const result = jumpIntoRhythmReducer(undefined, toggleHasExtraMeasure(true));
    expect(result.rhythm.length).toBe(8);
    const result2 = jumpIntoRhythmReducer(result, toggleHasExtraMeasure(false));
    expect(result2.rhythm.length).toBe(4);
  });
});