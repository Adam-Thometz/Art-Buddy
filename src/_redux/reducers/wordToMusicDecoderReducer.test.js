import wordToMusicDecoderReducer, { INITIAL_STATE } from './wordToMusicDecoderReducer';
import { addWord, createWord, fillLetter, changeScale, clearGame } from '../actions/wordToMusicActions';

import {
  testWordDisplayOneWord,
  testState
} from '../../_testUtils/test-states/wordToMusicReducerTestState';

jest.mock('../../music-decoder/_utils/synth');

describe('Word To Music reducer', () => {
  it('should return the initial state', () => {
    expect(wordToMusicDecoderReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should add an input to the word display', () => {
    const result = wordToMusicDecoderReducer(undefined, addWord());
    expect(result.wordDisplay.length).toBe(2);
  });

  it('should create a word for the word display', () => {
    const result = wordToMusicDecoderReducer(undefined, createWord({
      id: 0,
      input: 'hi'
    }));
    expect(result.wordDisplay).toEqual(testWordDisplayOneWord);
  });

  it('should fill a letter with a note', () => {
    const result = wordToMusicDecoderReducer(testState, fillLetter({
      letter: 'H',
      note: 'A'
    }));
    expect(result.wordDisplay[0].word[0]).toEqual({ letter: 'H', note: 'A' });
  });
  
  it('should not work if fill letter is called with a letter not in wordDisplay', () => {
    const result = wordToMusicDecoderReducer(testState, fillLetter({
      letter: 'B',
      note: 'B'
    }));
    expect(result.wordDisplay).toEqual(testWordDisplayOneWord);
  });

  it('should change the scale of a word', () => {
    const result = wordToMusicDecoderReducer(testState, changeScale({
      scaleId: 5,
      wordId: 0
    }))
    expect(result.wordDisplay[0].scale).toBe(5);
  })

  it('should handle resetting the game', () => {
    const result = wordToMusicDecoderReducer(testState, clearGame());
    expect(result).toEqual(INITIAL_STATE);
  });
});