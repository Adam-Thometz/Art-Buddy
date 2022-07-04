import { changeScale, createWords, fillLetter, clearGame, toggleUpperCase, toggleNote, changeSound } from "../actions/wordToMusicActions";
import { createReducer } from "@reduxjs/toolkit";

import hasValidWords from "_helpers/music-decoder/hasValidWords";
import searchLetter from "_helpers/music-decoder/searchLetter";
import findLettersToRemove from "_helpers/music-decoder/findLettersToRemove";

import play from "_helpers/music-decoder/play";
import { LETTER_NOTES } from "_helpers/music-decoder/letterNotes";

export const INITIAL_STATE = {
  words: [],
  filledLetters: [],
  scale: 0,
  sound: 'synth',
  isUpperCase: true,
  currPlaying: null,
  formError: null
};

const wordToMusicDecoderReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(createWords, (state, action) => {
      const words = action.payload;
      if (words.length === 0) {
        state.words = INITIAL_STATE.words;
        state.filledLetters = INITIAL_STATE.filledLetters;
        return;
      };
      
      const check = hasValidWords(words);
      if (!check.success) {
        state.formError = check.error;
        return;
      };
      
      const splitWords = words.split(' ');
      const newWords = [];
      for (let i = 0; i < splitWords.length; i++) {
        if (splitWords[i].length > 0) newWords.push(splitWords[i]);
      };

      if (words.length < state.words.join(' ').length) {
        const lettersToUnfill = findLettersToRemove({ newWords, currWords: state.words });
        const newFilledLetters = state.filledLetters.filter(letter => !lettersToUnfill.includes(letter));
        state.filledLetters = newFilledLetters;
      };
      
      state.words = newWords.length ? newWords : INITIAL_STATE.words;
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
    .addCase(toggleNote, (state, action) => {
      state.currPlaying = action.payload;
    })
    .addCase(clearGame, (state) => {
      state.words = [];
      state.filledLetters = [];
      state.scale = 0;
      state.sound = 'synth';
      state.isUpperCase = true;
      state.formError = null;
    });
})

export default wordToMusicDecoderReducer;