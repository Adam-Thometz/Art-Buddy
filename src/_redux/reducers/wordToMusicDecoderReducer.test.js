import wordToMusicDecoderReducer, { INITIAL_STATE } from './wordToMusicDecoderReducer';
import { createWords, fillLetter, changeScale, clearGame } from '../actions/wordToMusicActions';

import {
  testWordDisplayOneWord,
  testState
} from '../../_testUtils/test-states/wordToMusicReducerTestState';

jest.mock('../../music-decoder/_utils/play');

describe('Word To Music reducer', () => {
  it('should return the initial state', () => {
    expect(wordToMusicDecoderReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should create a word for the word display', () => {
    const result = wordToMusicDecoderReducer(undefined, createWords('hi'));
    expect(result.wordDisplay).toEqual(testWordDisplayOneWord);
    expect(result.formError).toBeNull();
  });
  
  it('should throw an error if a word is invalid', () => {
    const result = wordToMusicDecoderReducer(undefined, createWords('he110'));
    expect(result.formError).toBe('Only letters are allowed!')
  })

  it('should fill a letter with a note', () => {
    const letterObject = { letter: 'H', note: 'A' }
    const result = wordToMusicDecoderReducer(testState, fillLetter(letterObject));
    expect(result.wordDisplay[0][0]).toEqual(letterObject);
  });
  
  it('should not work if fill letter is called with a letter not in wordDisplay', () => {
    const result = wordToMusicDecoderReducer(testState, fillLetter({
      letter: 'B',
      note: 'B'
    }));
    expect(result.wordDisplay).toEqual(testWordDisplayOneWord);
  });

  it('should change the scale', () => {
    const result = wordToMusicDecoderReducer(testState, changeScale(5))
    expect(result.scale).toBe(5);
  })

  it('should handle resetting the game', () => {
    const result = wordToMusicDecoderReducer(testState, clearGame());
    expect(result).toEqual(INITIAL_STATE);
  });
});