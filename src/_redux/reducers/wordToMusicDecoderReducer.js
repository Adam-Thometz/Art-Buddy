import { changeScale, createWords, fillLetter, clearGame, toggleUpperCase } from "../actions/wordToMusicActions";
import { createReducer } from "@reduxjs/toolkit";

import hasValidWords from "../helpers/hasValidWords";
import searchLetter from "../helpers/searchLetter";

export const INITIAL_STATE = {
  wordDisplay: [[]],
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
        state.wordDisplay = INITIAL_STATE.wordDisplay;
        return;
      };
      const check = hasValidWords(words);
      if (!check.success) {
        state.formError = check.error;
        return;
      };

      const newWords = words.toUpperCase().split(' ');
      const newWordDisplay = [];
      for (let i = 0; i < newWords.length; i++) {
        const wordToTurn = newWords[i].split('');
        const result = wordToTurn.map(letter => ({
          letter,
          note: null
        }));
        newWordDisplay.push(result);
      };
      state.wordDisplay = newWordDisplay.length ?
        newWordDisplay :
        INITIAL_STATE.wordDisplay;
      state.formError = null;
    })
    .addCase(fillLetter, (state, action) => {
      const { letter, note } = action.payload;
      const letterLocation = searchLetter(state.wordDisplay, letter);
      if (!letterLocation.length) return;

      const wordIdx = letterLocation[0];
      const letterIdx = letterLocation[1];
      state.wordDisplay[wordIdx][letterIdx].note = note;
      if (process.env.NODE_ENV !== 'test') {
        const sound = window.wordToMusicSound;
        sound.triggerAttackRelease(`${note}3`, '4n');
      }
    })
    .addCase(changeScale, (state, action) => {
      state.scale = action.payload;
    })
    .addCase(toggleUpperCase, (state) => {
      state.isUpperCase = !state.isUpperCase
    })
    .addCase(clearGame, (state) => {
      state.wordDisplay = [[]];
      state.scale = 0;
      state.sound = null;
      state.isUpperCase = true;
      state.formError = null;
    });
})

export default wordToMusicDecoderReducer;