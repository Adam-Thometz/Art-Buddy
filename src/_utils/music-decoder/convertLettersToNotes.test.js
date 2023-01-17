import convertLettersToNotes from "./convertLettersToNotes";

describe("convertLettersToNotes function", () => {
  it("should work for one word with all letters filled in", () => {
    const words = ["hi"];
    const filledLetters = { h: true, i: true };
    const { notesToPlay, lettersToToggle } = convertLettersToNotes(
      words,
      filledLetters
    );
    expect(notesToPlay).toEqual(["F", "G"]);
    expect(lettersToToggle).toEqual(["h", "i"]);
  });

  it("should work for two words with all letters filled in", () => {
    const words = ["hi", "there"];
    const filledLetters = { h: true, i: true, t: true, e: true, r: true };
    const { notesToPlay, lettersToToggle } = convertLettersToNotes(
      words,
      filledLetters
    );
    expect(notesToPlay).toEqual(["F", "G", "", "D", "F", "C", "B", "C"]);
    expect(lettersToToggle).toEqual(["h", "i", "", "t", "h", "e", "r", "e"]);
  });

  it("should work for one word partially filled in", () => {
    const words = ["hi"];
    const filledLetters = { h: true };
    const { notesToPlay, lettersToToggle } = convertLettersToNotes(
      words,
      filledLetters
    );
    expect(notesToPlay).toEqual(["F"]);
    expect(lettersToToggle).toEqual(["h"]);
  });

  it("should work for two words partially filled in", () => {
    const words = ["hi", "there"];
    const filledLetters = { h: true, t: true, r: true };
    const { notesToPlay, lettersToToggle } = convertLettersToNotes(
      words,
      filledLetters
    );
    expect(notesToPlay).toEqual(["F", "", "D", "F", "B"]);
    expect(lettersToToggle).toEqual(["h", "", "t", "h", "r"]);
  });
});
