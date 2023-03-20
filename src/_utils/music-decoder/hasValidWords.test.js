import hasValidWords, {
  SUCCESS, TOO_MANY_CHARS, NON_LETTERS, MORE_THAN_FOUR_WORDS, WORD_HAS_OVER_12_CHARS
} from "./hasValidWords";
import { faker } from "@faker-js/faker";

describe("hasValidWords function", () => {
  const RANDOM_LONG_INPUT = `${faker.random.alpha(9)} ${faker.random.alpha(9)} ${faker.random.alpha(9)}`;
  const tests = [
    // assertion                     words                   result
    ["one valid word",               faker.random.alpha(5),  SUCCESS],
    ["two valid words",              faker.random.words(2),  SUCCESS],
    ["over 26 chars",                RANDOM_LONG_INPUT,      TOO_MANY_CHARS],
    ["more than 4 words",            faker.random.words(5),  MORE_THAN_FOUR_WORDS],
    ["word with more than 12 chars", faker.random.alpha(13), WORD_HAS_OVER_12_CHARS],
    ["inputs with non-letters",      faker.random.numeric(), NON_LETTERS],
  ];
  it.each(tests)("supports %s", (_, words, result) => {
    expect(hasValidWords(words)).toEqual(result);
  });
});
