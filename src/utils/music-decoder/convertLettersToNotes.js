import LETTER_NOTES from "data/music-decoder/letterNotes";

/** convertLettersToNotes
 * Purpose: takes an array of words from user input and filledLetters object, converts the letters to notes using the LETTERS_NOTES object, and returns an object containing array of notes to play and an array of letters to toggle
 * Found in: DecoderControls.js
 */

export default function convertLettersToNotes(words, filledLetters) {
  const notesToPlay = [];
  const lettersToToggle = [];

  for (let i = 0; i < words.length; i++) {
    for (let char of words[i]) {
      if (!filledLetters[char]) {
        continue;
      } else {
        const note = LETTER_NOTES[char];
        notesToPlay.push(note);
        lettersToToggle.push(char);
      }
    }
    if (i < words.length - 1) {
      notesToPlay.push("");
      lettersToToggle.push("");
    }
  }

  return { notesToPlay, lettersToToggle };
}
