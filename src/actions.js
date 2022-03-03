import { CREATE_WORD, FILL_LETTER } from "./actionTypes";

// Actions for Music Colors
export const createWord = (wordInput) => ({
  type: CREATE_WORD,
  wordInput
});

export const fillLetter = (letter, note) => ({
  type: FILL_LETTER,
  letter,
  note
});