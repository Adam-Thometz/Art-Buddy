import convertLettersToNotes from "./convertLettersToNotes";

describe('convertLettersToNotes function', () => {
  it('should work for one word with all letters filled in', () => {
    const words = ['hi'];
    const filledLetters = { h: true, i: true };
    const { notesToPlay, lettersToToggle } = convertLettersToNotes(words, filledLetters);
    expect(notesToPlay).toEqual(['F', 'G']);
    expect(lettersToToggle).toEqual(['h', 'i']);
  });

  it('should work for one word partially filled in', () => {
    const words = ['hi'];
    const filledLetters = { h: true };
    const { notesToPlay, lettersToToggle } = convertLettersToNotes(words, filledLetters);
    expect(notesToPlay).toEqual(['F']);
    expect(lettersToToggle).toEqual(['h']);
  })
});