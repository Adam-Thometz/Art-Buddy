/** hasValidWords
 * Purpose: takes an array of words and checks for inputs that fit the following constraints:
 * - no more than 4 words
 * - no more than 26 characters, not including spaces
 * - only letters. No numbers, symbols, etc.
 * - each word can only have up to 12 characters
 *
 * Found in: WordForm.js
 */

export const SUCCESS = { success: true };
export const TOO_MANY_CHARS = { success: false, error: "Input can only have 26 characters" };
export const NON_LETTERS = { success: false, error: "Only letters are allowed" };
export const MORE_THAN_FOUR_WORDS = { success: false, error: "Only four words at a time" };
export const WORD_HAS_OVER_12_CHARS = { success: false, error: "Words can only have 12 characters at a time" };

export default function hasValidWords(words) {
  const fullInput = words.replace(/ /g, "");
  if (fullInput.length > 26) return TOO_MANY_CHARS;

  const wordsArr = words.split(" ");
  if (wordsArr.length > 4) return MORE_THAN_FOUR_WORDS;

  for (let word of wordsArr) {
    if (word.length === 0) return { success: true };
    if (word.length > 12) return WORD_HAS_OVER_12_CHARS;

    const hasValidChars = word.match(/^[A-Za-z]+$/);
    if (!hasValidChars) return NON_LETTERS;
  }

  return SUCCESS;
}
