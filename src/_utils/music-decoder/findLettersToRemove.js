/** findLettersToRemove
 * Purpose: compares the old input with the updated input to see if any letters need to be removed from the filledLetters array in the Redux state
 * Found in: wordsToMusicDecoderReducer.js
 */

export default function findLettersToRemove({ oldInput, newInput }) {
  const oldLetters = lettersInInput(oldInput);
  const newLetters = lettersInInput(newInput);
  const lettersToRemove = [];
  for (let char of oldLetters.keys()) {
    if (!newLetters.has(char)) lettersToRemove.push(char);
  }
  return lettersToRemove;
}

export function lettersInInput(words) {
  const letters = new Set();
  for (let word of words) {
    for (let char of word) {
      letters.add(char);
    }
  }
  return letters;
}
