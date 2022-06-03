import { LETTER_NOTES } from "./letterNotes";

export default function convertLettersToNotes(words, filledLetters) {
  const result = [];

  for (let word of words) {
    for (let char of word) {
      if (!filledLetters.includes(char)) continue;
      if (char === ' ') {
        result.push(' ');
      } else {
        const note = LETTER_NOTES[char];
        result.push(note);
      };
    };
  };

  return result;
}