import { LETTER_NOTES } from "./letterNotes";

export default function convertLettersToNotes(words, filledLetters) {
  const result = [];

  for (let word of words) {
    for (let char of word) {
      if (!filledLetters.includes(char)) continue;
      
      const note = LETTER_NOTES[char];
      result.push(note);
    };
    result.push('');
  };

  return result;
};