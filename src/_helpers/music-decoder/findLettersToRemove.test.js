import findLettersToRemove, { lettersInInput } from "./findLettersToRemove";

const geez = ['geez'];
const awGeez = ['aw', 'geez'];
const awGee = ['aw', 'gee'];
const awGe = ['aw', 'ge'];

describe('makeFrequencyCounter function', () => {
  it('should create a frequencyCounter for one word', () => {
    const result = lettersInInput(geez);
    expect(result).toEqual({ g: true, e: true, z: true });
  });

  it('should create a frequencyCounter for two words', () => {
    const result = lettersInInput(awGeez);
    expect(result).toEqual({ a: true, w: true, g: true, e: true, z: true });
  });
});

describe('findLettersToRemove function', () => {
  it('should return letters to remove if one unique letter is deleted', () => {
    const result = findLettersToRemove({ oldInput: awGeez, newInput: awGee });
    expect(result).toEqual(['z']);
  });

  it('should return an empty array if one or more non-unique letters are deleted', () => {
    const result = findLettersToRemove({ oldInput: awGee, newInput: awGe });
    expect(result).toEqual([]);
  });

  it('should handle multiple characters being deleted', () => {
    const result = findLettersToRemove({ oldInput: awGeez, newInput: geez });
    expect(result).toEqual(['a', 'w']);
  });
});