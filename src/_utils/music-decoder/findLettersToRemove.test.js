import findLettersToRemove from "./findLettersToRemove";

describe("findLettersToRemove function", () => {
  const tests =  [
    // assertion                old input        new input      result
    ["one unique letter",       ["aw", "geez"],  ["aw", "gee"], ["z"]],
    ["no unique letters",       ["aw", "gee"],   ["aw", "ge"],  []],
    ["multiple unique letters", ["aw", "geez"],  ["geez"], ["a", "w"]],
  ];
  it.each(tests)("supports %s", (_, oldInput, newInput, result) => {
    expect(findLettersToRemove({ oldInput, newInput })).toEqual(result)
  });
});
