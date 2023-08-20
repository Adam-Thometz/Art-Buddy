import searchLetter from "./searchLetter";

describe("searchLetters function", () => {
  const tests = [
    // test              input            letter result
    ["one word",         ["HI"],          "I",   true],
    ["two words",        ["HI", "HELLO"], "I",   true],
    ["no found letters", ["HI", "HELLO"], "F",   false],
  ];
  it.each(tests)("supports %s", (_, input, letter, result) => {
    expect(searchLetter(input, letter)).toBe(result);
  })
});
