import { changeScale, createWords, fillLetter, clearGame, toggleUpperCase, toggleNote, changeSound } from "./musicDecoderActions";
import { createReducer } from "@reduxjs/toolkit";

import searchLetter from "_utils/music-decoder/searchLetter";
import findLettersToRemove from "_utils/music-decoder/findLettersToRemove";
import LETTER_NOTES from "_data/music-decoder/letterNotes";

export const INITIAL_STATE = {
  words: [],
  filledLetters: {},
  scale: 0,
  sound: 'synth',
  isUpperCase: true,
  currPlaying: null,
};

const musicDecoderReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(createWords, (state, action) => {
      const newWords = action.payload;
      if (!newWords.length) {
        state.words = INITIAL_STATE.words;
        state.filledLetters = INITIAL_STATE.filledLetters;
        return;
      };
      
      const splitWords = newWords.split(' ');
      if (newWords.length < state.words.join(' ').length) {
        const lettersToUnfill = findLettersToRemove({ oldInput: state.words, newInput: splitWords });
        const newFilledLetters = state.filledLetters;
        for (let letter of lettersToUnfill) newFilledLetters[letter] = false;
        state.filledLetters = newFilledLetters;
      };
      state.words = splitWords;
    })
    .addCase(fillLetter, (state, action) => {
      const { letter, play } = action.payload;
      const hasLetter = searchLetter(state.words, letter);
      if (hasLetter) {
        const newFilledLetters = { ...state.filledLetters, [letter]: true };
        state.filledLetters = newFilledLetters;
        play(LETTER_NOTES[letter])
      };
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
      state.words = INITIAL_STATE.words;
      state.filledLetters = INITIAL_STATE.filledLetters;
      state.scale = INITIAL_STATE.scale;
      state.sound = INITIAL_STATE.sound;
      state.isUpperCase = INITIAL_STATE.isUpperCase;
    });
});

export default musicDecoderReducer;