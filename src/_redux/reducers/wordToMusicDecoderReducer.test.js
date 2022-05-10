import wordToMusicDecoderReducer, { INITIAL_STATE, searchLetter } from './wordToMusicDecoderReducer';
import { addWord, createWord, fillLetter, changeScale, clearGame } from '../actions/wordToMusicActions';

import {
  testWordDisplayOneWord,
  testWordDisplayTwoWords,
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

describe('searchLetters function', () => {
  it('should work with one word', () => {
    const result = searchLetter(testWordDisplayOneWord, 'I');
    expect(result.length).toBe(2);
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(1);
  });
  it('should work with two words', () => {
    const result1 = searchLetter(testWordDisplayTwoWords, 'H');
    const result2 = searchLetter(testWordDisplayTwoWords, 'O');
    expect(result1.length).toBe(2);
    expect(result1[0]).toBe(0);
    expect(result1[1]).toBe(0);
    
    expect(result2.length).toBe(2); 
    expect(result2[0]).toBe(1);
    expect(result2[1]).toBe(4);
  });
});