import sequenceMakerReducer, { INITIAL_STATE } from "./sequenceMakerReducer";
import { addBlock, addToSequence, changeCategory, removeBlock, removeFromSequence, resetSequence, setPitch } from "../actions/sequenceMakerActions";

import { withCategory } from '../../_testUtils/test-states/sequenceMakerReducerTestState'

jest.mock('../../_utils/sample.js');

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
    expect(result.sequence[0].alt).toBe('DOG');
  });

  it('should handle adding to sequence STOP ONLY', () => {
    const result = sequenceMakerReducer(withCategory, addToSequence('stop'));
    expect(result.sequence[0].id).toBe(0);
    expect(result.sequence[0].alt).toBe('STOP');
    expect(result.sequence[0].sound).toBe(null);
  });
  
  it('should handle removing from sequence', () => {
    const before = sequenceMakerReducer(withCategory, addToSequence('stop'));
    const result = sequenceMakerReducer(before, removeFromSequence(0));
    expect(result.sequence[0]).toBe(null);
  });

  it('should handle adding a block', () => {
    const result = sequenceMakerReducer(undefined, addBlock());
    expect(result.sequence.length).toBe(5);
  });
  
  it('should handle removing a block', () => {
    const result = sequenceMakerReducer(undefined, removeBlock());
    expect(result.sequence.length).toBe(3);
  });

  it('should handle resetting the sequence', () => {
    const first = sequenceMakerReducer(withCategory, addToSequence('cat'));
    const second = sequenceMakerReducer(first, addToSequence('dog'));
    const result = sequenceMakerReducer(second, resetSequence());
    expect(result.sequence[0]).toBe(null);
    expect(result.sequence[1]).toBe(null);
  });
  
  it('should handle setting the pitch of a block', () => {
    const before = sequenceMakerReducer(withCategory, addToSequence('cat'));
    const result = sequenceMakerReducer(before, setPitch({
      id: 0,
      pitch: 'low'
    }));
    expect(result.sequence[0].pitch).toBe('low')
  });
})