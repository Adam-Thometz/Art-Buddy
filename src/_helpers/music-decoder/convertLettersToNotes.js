import LETTER_NOTES from "./letterNotes";

/** convertLettersToNotes
 * Purpose: takes the input and filledLetters array, converts the letters to notes using the LETTERS_NOTES object, and returns an array of notes to play and an array of notes to toggle
 * Found in: DecoderControls.js
 */

export default function convertLettersToNotes(words, filledLetters) {
  const notesToPlay = [];
  const lettersToToggle = [];

  for (let i = 0; i < words.length; i++) {
    for (let char of words[i]) {
      if (!filledLetters.includes(char)) {
        continue;
      } else {
        const note = LETTER_NOTES[char];
        notesToPlay.push(note);
        lettersToToggle.push(char);
      };
    };
    if (i < words.length - 1) {
      notesToPlay.push('');
      lettersToToggle.push('');
    };
  };

  return { notesToPlay, lettersToToggle };
};