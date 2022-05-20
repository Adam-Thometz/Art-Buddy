import sequenceMakerReducer, { INITIAL_STATE } from "./sequenceMakerReducer";
import { addToSequence, changeCategory, clearGame, removeFromSequence, resetSequence, setPitch } from "../actions/sequenceMakerActions";

import { withCategory } from '../../_testUtils/test-states/sequenceMakerReducerTestState'

describe('Sequence Maker reducer', () => {
  it('should return the initial state', () => {
    expect(sequenceMakerReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle changing category', () => {
    expect(sequenceMakerReducer(undefined, changeCategory('animals'))).toEqual({
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
  
  it('should handle setting the pitch of a block', () => {
    const result = sequenceMakerReducer(undefined, setPitch(2));
    expect(result.pitch).toBe(2);
  });

  it('should handle resetting the game', () => {
    const result = sequenceMakerReducer(withCategory, clearGame());
    expect(result).toEqual(INITIAL_STATE);
  });
});