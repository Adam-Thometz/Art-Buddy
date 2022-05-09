import wordToMusicDecoderReducer, { INITIAL_STATE, searchLetter } from './wordToMusicDecoderReducer';
import { addWord, createWord, fillLetter, playNote, playMelody, changeScale, changeSound } from '../actions/wordToMusicActions';

import {
  testWordDisplayOneWord,
  testWordDisplayTwoWords
} from '../../_testUtils/test-states/wordToMusicReducerTestState';

jest.mock('../../_utils/synth');

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

  it('should handle resetting the game', () => {
    // const result = wordToMusicDecoderReducer(withCategory, clearGame());
    // expect(result).toEqual(INITIAL_STATE);
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