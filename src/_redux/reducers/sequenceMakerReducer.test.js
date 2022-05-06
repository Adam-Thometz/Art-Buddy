import sequenceMakerReducer, { INITIAL_STATE, sample } from "./sequenceMakerReducer";
import { addBlock, addToSequence, changeCategory, playAllSequence, playSequence, removeBlock, removeFromSequence, resetSequence, setPitch } from "../actions/sequenceMakerActions";

import { withCategory } from '../../_testUtils/test-states/sequenceMakerReducerTestState'

jest.mock('./sequenceMakerReducer', () => {
  const originalModule = jest.requireActual('./sequenceMakerReducer');
  return {
    __esModule: true,
    ...originalModule,
    sample: jest.fn((sound) => sound)
  }
});

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
    expect(result.sequence[0].id).toBe(0);
    expect(sample).toHaveBeenCalled();
  });

  it('should handle adding to sequence STOP ONLY', () => {
    const result = sequenceMakerReducer(withCategory, addToSequence('stop'));
    expect(result.sequence[0].id).toBe(0);
    expect(result.sequence[0].sound).toBe(null);
  });

  it('should handle adding a block', () => {
    const result = sequenceMakerReducer(undefined, addBlock());
    expect(result.sequence.length).toBe(5);
  });
  
  it('should handle removing a block', () => {
    const result = sequenceMakerReducer(undefined, removeBlock());
    expect(result.sequence.length).toBe(3);
  });
})