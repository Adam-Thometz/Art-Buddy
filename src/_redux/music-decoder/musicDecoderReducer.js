import { changeScale, createWords, fillLetter, clearGame, toggleUpperCase, toggleNote, changeSound } from "./musicDecoderActions";
import { createReducer } from "@reduxjs/toolkit";

import hasValidWords from "_helpers/music-decoder/hasValidWords";
import searchLetter from "_helpers/music-decoder/searchLetter";
import findLettersToRemove from "_helpers/music-decoder/findLettersToRemove";
import play from "_helpers/music-decoder/play";
import LETTER_NOTES from "_helpers/music-decoder/letterNotes";

export const INITIAL_STATE = {
  words: [],
  filledLetters: {},
  scale: 0,
  sound: 'synth',
  isUpperCase: true,
  currPlaying: null,
  formError: null
};

const musicDecoderReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(createWords, (state, action) => {
      const newWords = action.payload;
      if (newWords.length === 0) {
        state.words = INITIAL_STATE.words;
        state.filledLetters = INITIAL_STATE.filledLetters;
        return;
      };
      
      const check = hasValidWords(newWords);
      if (!check.success) { state.formError = check.error; return; };
      
      const splitWords = newWords.split(' ');
      const newInput = [];
      for (let i = 0; i < splitWords.length; i++) {
        if (splitWords[i].length > 0) newInput.push(splitWords[i]);
      };

      if (newWords.length < state.words.join(' ').length) {
        const newFilledLetters = { ...state.filledLetters }
        const lettersToUnfill = findLettersToRemove({ oldInput: state.words, newInput });
        for (let letter of lettersToUnfill) newFilledLetters[letter] = false
        state.filledLetters = newFilledLetters;
      };
      
      state.words = newInput.length ? newInput : INITIAL_STATE.words;
      state.formError = null;
    })
    .addCase(fillLetter, (state, action) => {
      const letter = action.payload;
      const hasLetter = searchLetter(state.words, letter);
      if (!hasLetter) return;

      const newFilledLetters = { ...state.filledLetters, [letter]: true };
      state.filledLetters = newFilledLetters;
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
    .addCase(toggleNote, (state, action) => {
      state.currPlaying = action.payload;
    })
    .addCase(clearGame, (state) => {
      state.words = [];
      state.filledLetters = {};
      state.scale = 0;
      state.sound = 'synth';
      state.isUpperCase = true;
      state.formError = null;
    });
});

export default musicDecoderReducer;