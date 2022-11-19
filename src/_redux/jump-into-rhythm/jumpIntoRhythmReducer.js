import { addToRhythm, clearGame, toggleHasExtraMeasure } from "./jumpIntoRhythmActions";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  rhythm: [null, null, null, null]
};

const jumpIntoRhythmReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addToRhythm, (state, action) => {
      const nextIdx = state.rhythm.indexOf(null);
      if (nextIdx === -1) return;
      
      const { id, img, duration } = action.payload;
      const newRhythm = [ ...state.rhythm ];
      newRhythm[nextIdx] = { id, img, duration };
      state.rhythm = newRhythm;
    })
    .addCase(toggleHasExtraMeasure, (state, action) => {
      const newRhythm = [ ...state.rhythm ];
      for (let i = 1; i <= 4; i++) {
        action.payload === true
          ? newRhythm.push(null)
          : newRhythm.pop();
      }
      state.rhythm = newRhythm;
    })
    .addCase(clearGame, (state) => {
      state.rhythm = INITIAL_STATE.rhythm;
    })
});

export default jumpIntoRhythmReducer;