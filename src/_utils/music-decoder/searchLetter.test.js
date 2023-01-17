import searchLetter from "./searchLetter";

describe("searchLetters function", () => {
  it("should work with one word", () => {
    const result = searchLetter(["HI"], "I");
    expect(result).toBe(true);
  });

  it("should work with two words", () => {
    const result = searchLetter(["HI", "HELLO"], "O");
    expect(result).toBe(true);
  });

  it("should return false if letter not found", () => {
    const result = searchLetter(["HI", "HELLO"], "F");
    expect(result).toBe(false);
  });
});
