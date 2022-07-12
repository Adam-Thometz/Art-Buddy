import musicDecoderReducer, { INITIAL_STATE } from './musicDecoderReducer';
import { createWords, fillLetter, changeScale, clearGame, toggleUpperCase, toggleNote } from './musicDecoderActions';

import { testState } from '_testUtils/test-states/musicDecoderReducerTestState';

jest.mock('_helpers/music-decoder/play');

describe('Word To Music reducer', () => {
  it('should return the initial state', () => {
    expect(musicDecoderReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should create a word for the word display', () => {
    const result = musicDecoderReducer(undefined, createWords('hi'));
    expect(result.words).toEqual(['hi']);
    expect(result.formError).toBeNull();
  });
  
  it('should throw an error if a word is invalid', () => {
    const result = musicDecoderReducer(undefined, createWords('he110'));
    expect(result.formError).toBe('Only letters are allowed');
  });

  it('should fill a letter with a note', () => {
    const result = musicDecoderReducer(testState, fillLetter('H'));
    expect(result.filledLetters['H']).toBe(true);
  });
  
  it('should not work if fill letter is called with a letter not in words', () => {
    const result = musicDecoderReducer(testState, fillLetter('B'));
    expect(Object.keys(result.filledLetters).length).toBe(0);
  });

  it('should change the scale', () => {
    const result = musicDecoderReducer(testState, changeScale(5))
    expect(result.scale).toBe(5);
  });

  it('should toggle between uppercase and lowercase', () => {
    const result = musicDecoderReducer(undefined, toggleUpperCase());
    expect(result.isUpperCase).toBe(false);
    const result2 = musicDecoderReducer(result, toggleUpperCase());
    expect(result2.isUpperCase).toBe(true);
  });

  it('should toggle a note on and off', () => {
    const result = musicDecoderReducer(testState, toggleNote('H'));
    expect(result.currPlaying).toBe('H');
  })

  it('should handle resetting', () => {
    const result = musicDecoderReducer(testState, clearGame());
    expect(result).toEqual(INITIAL_STATE);
  });
});