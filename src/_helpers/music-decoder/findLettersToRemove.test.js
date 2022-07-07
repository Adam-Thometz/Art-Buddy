import findLettersToRemove, { makeFrequencyCounter } from "./findLettersToRemove";

const geez = ['geez'];
const awGeez = ['aw', 'geez'];
const awGee = ['aw', 'gee'];
const awGe = ['aw', 'ge'];

describe('makeFrequencyCounter function', () => {
  it('should create a frequencyCounter for one word', () => {
    const result = makeFrequencyCounter(geez);
    expect(result).toEqual({ g: 1, e: 2, z: 1 });
  });

  it('should create a frequencyCounter for two words', () => {
    const result = makeFrequencyCounter(awGeez);
    expect(result).toEqual({ a: 1, w: 1, g: 1, e: 2, z: 1 });
  });
});

describe('findLettersToRemove function', () => {
  it('should return letters to remove if one unique letter is deleted', () => {
    const result = findLettersToRemove({ currWords: awGeez, newWords: awGee });
    expect(result).toEqual(['z']);
  });

  it('should return an empty array if one or more non-unique letters are deleted', () => {
    const result = findLettersToRemove({ currWords: awGee, newWords: awGe });
    expect(result).toEqual([]);
  });

  it('should handle multiple characters being deleted', () => {
    const result = findLettersToRemove({ currWords: awGeez, newWords: geez });
    expect(result).toEqual(['a', 'w']);
  });
});