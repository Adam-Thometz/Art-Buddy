import sequenceMakerReducer, { INITIAL_STATE } from "./sequenceMakerReducer";
import { addToSequence, setCategory, removeFromSequence, resetSequence, setDuration, setPitch, clearGame, togglePlaying } from "./sequenceMakerActions";

import { withCategory } from '_testUtils/test-states/sequenceMakerReducerTestState';

describe('Sequence Maker reducer', () => {
  it('should return the initial state', () => {
    expect(sequenceMakerReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle changing category', () => {
    expect(sequenceMakerReducer(undefined, setCategory('animals'))).toEqual({
      ...INITIAL_STATE,
      category: 'animals'
    });
  });
  
  it('should handle adding to sequence', () => {
    const result = sequenceMakerReducer(withCategory, addToSequence('dog'));
    expect(result.sequence[0].alt).toBe('DOG');
  });
  
  it('should handle removing from sequence', () => {
    const before = sequenceMakerReducer(withCategory, addToSequence('stop'));
    const result = sequenceMakerReducer(before, removeFromSequence(0));
    expect(result.sequence[0]).toBe(null);
  });

  it('should handle resetting the sequence', () => {
    const first = sequenceMakerReducer(withCategory, addToSequence('cat'));
    const second = sequenceMakerReducer(first, addToSequence('dog'));
    const result = sequenceMakerReducer(second, resetSequence());
    expect(result.sequence[0]).toBe(null);
    expect(result.sequence[1]).toBe(null);
  });
  
  it('should handle setting the pitch', () => {
    const result = sequenceMakerReducer(undefined, setPitch(2));
    expect(result.pitch).toBe(2);
  });
  
  it('should handle setting the duration', () => {
    const result = sequenceMakerReducer(undefined, setDuration(2));
    expect(result.duration).toBe(2);
  });

  it('should handle toggling isPlaying', () => {
    const before = sequenceMakerReducer(withCategory, addToSequence('dog'));
    const result = sequenceMakerReducer(before, togglePlaying(0));
    expect(result.sequence[0].isPlaying).toBeTruthy();
    const result2 = sequenceMakerReducer(result, togglePlaying(0));
    expect(result2.sequence[0].isPlaying).toBeFalsy();
  })

  it('should handle resetting the game', () => {
    const result = sequenceMakerReducer(withCategory, clearGame());
    expect(result).toEqual(INITIAL_STATE);
  });
});