import searchLetter from './searchLetter'
import { testWordDisplayOneWord, testWordDisplayTwoWords } from '../../_testUtils/test-states/wordToMusicReducerTestState';

describe('searchLetters function', () => {
  it('should work with one word', () => {
    const result = searchLetter(testWordDisplayOneWord, 'I');
    expect(result.length).toBe(2);
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(1);
  });
  
  it('should work with two words', () => {
    const result1 = searchLetter(testWordDisplayTwoWords, 'H');
    expect(result1.length).toBe(2);
    expect(result1[0]).toBe(0);
    expect(result1[1]).toBe(0);
    
    const result2 = searchLetter(testWordDisplayTwoWords, 'O');
    expect(result2.length).toBe(2); 
    expect(result2[0]).toBe(1);
    expect(result2[1]).toBe(4);
  });

  it('should return an empty array if letter not found', () => {
    const result = searchLetter(testWordDisplayTwoWords, 'B');
    expect(result.length).toBe(0);
  })
});