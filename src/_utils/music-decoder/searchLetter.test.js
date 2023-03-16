import searchLetter from "./searchLetter";

describe("searchLetters function", () => {
  const tests = [
    // test              input            letter result
    ["one word",         ["HI"],          "I",   true],
    ["two words",        ["HI", "HELLO"], "I",   true],
    ["no found letters", ["HI", "HELLO"], "F",   false],
  ];
  tests.forEach((test) => {
    const [assertion, input, letter, result] = test;
    it(`supports ${assertion}`, () => {
      expect(searchLetter(input, letter)).toBe(result);
    });
  });
});
