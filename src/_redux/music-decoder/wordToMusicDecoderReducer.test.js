import wordToMusicDecoderReducer, { INITIAL_STATE } from './wordToMusicDecoderReducer';
import { createWords, fillLetter, changeScale, clearGame, toggleUpperCase, toggleNote } from './wordToMusicActions';

import { testState } from '_testUtils/test-states/wordToMusicReducerTestState';

jest.mock('_helpers/music-decoder/play');

describe('Word To Music reducer', () => {
  it('should return the initial state', () => {
    expect(wordToMusicDecoderReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should create a word for the word display', () => {
    const result = wordToMusicDecoderReducer(undefined, createWords('hi'));
    expect(result.words).toEqual(['hi']);
    expect(result.formError).toBeNull();
  });
  
  it('should throw an error if a word is invalid', () => {
    const result = wordToMusicDecoderReducer(undefined, createWords('he110'));
    expect(result.formError).toBe('Only letters are allowed');
  });

  it('should fill a letter with a note', () => {
    const result = wordToMusicDecoderReducer(testState, fillLetter('H'));
    expect(result.filledLetters['H']).toBe(true);
  });
  
  it('should not work if fill letter is called with a letter not in words', () => {
    const result = wordToMusicDecoderReducer(testState, fillLetter('B'));
    expect(Object.keys(result.filledLetters).length).toBe(0);
  });

  it('should change the scale', () => {
    const result = wordToMusicDecoderReducer(testState, changeScale(5))
    expect(result.scale).toBe(5);
  });

  it('should toggle between uppercase and lowercase', () => {
    const result = wordToMusicDecoderReducer(undefined, toggleUpperCase());
    expect(result.isUpperCase).toBe(false);
    const result2 = wordToMusicDecoderReducer(result, toggleUpperCase());
    expect(result2.isUpperCase).toBe(true);
  });

  it('should toggle a note on and off', () => {
    const result = wordToMusicDecoderReducer(testState, toggleNote('H'));
    expect(result.currPlaying).toBe('H');
  })

  it('should handle resetting', () => {
    const result = wordToMusicDecoderReducer(testState, clearGame());
    expect(result).toEqual(INITIAL_STATE);
  });
});