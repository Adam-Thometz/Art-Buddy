import { createSlice } from "@reduxjs/toolkit";
import findLettersToRemove from "utils/music-decoder/findLettersToRemove";

export const initialState = {
  words: [],
  filledLetters: {},
  scale: 0,
  sound: "synth",
  isUpperCase: true,
  currPlaying: null,
};

const musicDecoderSlice = createSlice({
  name: "nusicDecoder",
  initialState,
  reducers: {
    createWords(state, action) {
      const newWords = action.payload;
      if (!newWords.length) {
        state.words = initialState.words;
        state.filledLetters = initialState.filledLetters;
        return;
      }

      const splitWords = newWords.split(" ");
      if (newWords.length < state.words.join(" ").length) {
        const lettersToUnfill = findLettersToRemove({
          oldInput: state.words,
          newInput: splitWords,
        });
        const newFilledLetters = state.filledLetters;
        for (let letter of lettersToUnfill) newFilledLetters[letter] = false;
        state.filledLetters = newFilledLetters;
      }
      state.words = splitWords;
    },
    fillLetter(state, action) {
      const letter = action.payload;
      const newFilledLetters = { ...state.filledLetters, [letter]: true };
      state.filledLetters = newFilledLetters;
    },
    changeScale(state, action) {
      state.scale = action.payload;
    },
    changeSound(state, action) {
      state.sound = action.payload;
    },
    toggleUpperCase(state) {
      state.isUpperCase = !state.isUpperCase;
    },
    toggleNote(state, action) {
      state.currPlaying = action.payload;
    },
    clearGame(state) {
      state.words = initialState.words;
      state.filledLetters = initialState.filledLetters;
      state.scale = initialState.scale;
      state.sound = initialState.sound;
      state.isUpperCase = initialState.isUpperCase;
    }
  }
})

export const {
  createWords,
  fillLetter,
  changeScale,
  changeSound,
  toggleUpperCase,
  toggleNote,
  clearGame
} = musicDecoderSlice.actions;

export default musicDecoderSlice.reducer;
