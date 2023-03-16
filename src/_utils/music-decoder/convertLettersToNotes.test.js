import convertLettersToNotes from "./convertLettersToNotes";

describe("convertLettersToNotes function", () => {
  const ONE_FULL = { notesToPlay: ["F", "G"], lettersToToggle: ["h", "i"] };
  const TWO_FULL = { notesToPlay: ["F", "G", "", "D", "F", "C", "B", "C"], lettersToToggle: ["h", "i", "", "t", "h", "e", "r", "e"] };
  const ONE_PARTIAL = { notesToPlay: ["F"], lettersToToggle: ["h"] };
  const TWO_PARTIAL = { notesToPlay: ["F", "", "D", "F", "B"], lettersToToggle: ["h", "", "t", "h", "r"] };
  const tests = [
    // assertion                      words            filledLetters                                    result
    ["one word, all letters filled",  ["hi"],          { h: true, i: true },                            ONE_FULL],
    ["two words, all letters filled", ["hi", "there"], { h: true, i: true, t: true, e: true, r: true }, TWO_FULL],
    ["one word, partially filled",    ["hi"],          { h: true },                                     ONE_PARTIAL],
    ["two words, partially filled",   ["hi", "there"], { h: true, t: true, r: true },                   TWO_PARTIAL],
  ];

  tests.forEach(test => {
    const [assertion, words, filledLetters, result] = test;
    it(`supports ${assertion}`, () => {
      expect(convertLettersToNotes(words, filledLetters)).toEqual(result)
    });
  });
});
