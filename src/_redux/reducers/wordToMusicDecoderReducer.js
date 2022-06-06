import { changeScale, createWords, fillLetter, clearGame, toggleUpperCase, changeSound } from "../actions/wordToMusicActions";
import { createReducer } from "@reduxjs/toolkit";

import hasValidWords from "../helpers/hasValidWords";
import searchLetter from "../helpers/searchLetter";
import play from "../../music-decoder/_utils/play";
import { LETTER_NOTES } from "../../music-decoder/_utils/letterNotes";

export const INITIAL_STATE = {
  words: [],
  filledLetters: [],
  scale: 0,
  sound: null,
  isUpperCase: true,
  formError: null
};

const wordToMusicDecoderReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(createWords, (state, action) => {
      const words = action.payload;
      if (words.length === 0) {
        state.words = INITIAL_STATE.words;
        return;
      };
      const check = hasValidWords(words);
      if (!check.success) {
        state.formError = check.error;
        return;
      };

      const newWords = words.split(' ');
      const result = [];
      for (let i = 0; i < newWords.length; i++) {
        if (newWords[i].length > 0) result.push(newWords[i]);
      };
      state.words = result.length ?
        result :
        INITIAL_STATE.words;
      state.formError = null;
    })
    .addCase(fillLetter, (state, action) => {
      const letter = action.payload;
      const hasLetter = searchLetter(state.words, letter);
      if (!hasLetter) return;

      state.filledLetters.push(letter);
      play(LETTER_NOTES[letter]);
    })
    .addCase(changeScale, (state, action) => {
      state.scale = action.payload;
    })
    .addCase(changeSound, (state, action) => {
      state.sound = action.payload;
    })
    .addCase(toggleUpperCase, (state) => {
      state.isUpperCase = !state.isUpperCase;
    })
    .addCase(clearGame, (state) => {
      state.words = [];
      state.filledLetters = [];
      state.scale = 0;
      state.sound = null;
      state.isUpperCase = true;
      state.formError = null;
    });
})

export default wordToMusicDecoderReducer;