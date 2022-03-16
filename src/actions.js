import { CREATE_WORD, FILL_LETTER, CHANGE_CATEGORY, ADD_TO_SEQUENCE, REMOVE_FROM_SEQUENCE } from "./actionTypes";

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

// Actions for Sequence Maker
export const changeCategory = (category) => ({
  type: CHANGE_CATEGORY,
  category
})

export const addToSequence = (sound) => ({
  type: ADD_TO_SEQUENCE,
  sound
})

export const removeFromSequence = (id) => ({
  type: REMOVE_FROM_SEQUENCE,
  id
})