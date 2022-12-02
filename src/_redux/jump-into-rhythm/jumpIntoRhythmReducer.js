import { addToRhythm, clearGame, deleteFromRhythm, setMeasures, toggleLilyPadDisplay } from "./jumpIntoRhythmActions";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  isDisplayingLilyPads: false,
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
    .addCase(deleteFromRhythm, (state, action) => {
      const newRhythm = [ ...state.rhythm ];
      const id = action.payload;
      newRhythm[id] = null;
      state.rhythm = newRhythm;
    })
    .addCase(setMeasures, (state, action) => {
      const newRhythm = state.rhythm;
      const numOfBeats = action.payload;
      const isInvalid = 
        (newRhythm.length === 16 && numOfBeats > 0) ||
        (newRhythm.length === 4 && numOfBeats < 0)
      if (isInvalid) return;
      for (let i = 1; i <= Math.abs(numOfBeats); i++) {
        numOfBeats > 0
          ? newRhythm.push(null)
          : newRhythm.pop();
        state.rhythm = newRhythm;
      }
    })
    .addCase(toggleLilyPadDisplay, (state) => {
      state.isDisplayingLilyPads = !state.isDisplayingLilyPads;
    })
    .addCase(clearGame, (state) => {
      state.rhythm = INITIAL_STATE.rhythm;
      state.isDisplayingLilyPads = INITIAL_STATE.isDisplayingLilyPads;
    })
});

export default jumpIntoRhythmReducer;