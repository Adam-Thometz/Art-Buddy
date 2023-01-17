/** searchLetter
 * Purpose: takes an input of words and a letter and checks to see if the letter exists in the input
 * Found in: wordsToMusicDecoderReducer.js
 */

export default function searchLetter(input, letter) {
  for (let word of input) {
    if (word.includes(letter)) return true;
  }
  return false;
}
