import hasValidWords, { SUCCESS, TOO_MANY_CHARS, NON_LETTERS, MORE_THAN_FOUR_WORDS, WORD_HAS_OVER_12_CHARS } from "./hasValidWords";

describe("hasValidWords function", () => {
  const tests = [
    // assertion                     words                                result
    ["one valid word",               "hello",                             SUCCESS],
    ["two valid words",              "hello goodbye",                     SUCCESS],
    ["over 26 chars",                "those submarines have whalesharks", TOO_MANY_CHARS],
    ["more than 4 words",            "i am a weird cup",                  MORE_THAN_FOUR_WORDS],
    ["word with more than 12 chars", "disestablishmentarianism",          WORD_HAS_OVER_12_CHARS],
    ["inputs with non-letters",      "he110",                             NON_LETTERS],
  ]
  tests.forEach(test => {
    const [assertion, words, result] = test;
    it(`supports ${assertion}`, () => {
      expect(hasValidWords(words)).toEqual(result)
    });
  });
});
