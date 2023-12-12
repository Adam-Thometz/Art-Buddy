import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isDisplayingLilyPads: false,
  rhythm: [null, null, null, null],
  isAnimating: false,
};

const jumpIntoRhythmSlice = createSlice({
  name: 'jumpIntoRhythm',
  initialState,
  reducers: {
    addToRhythm(state, action) {
      const nextIdx = state.rhythm.indexOf(null);
      if (nextIdx === -1) return;

      const { id, img, duration, isRest } = action.payload;
      const newRhythm = [...state.rhythm];
      newRhythm[nextIdx] = { id, img, duration, isRest };
      state.rhythm = newRhythm;
    },
    deleteFromRhythm(state, action) {
      const newRhythm = [...state.rhythm];
      const id = action.payload;
      newRhythm[id] = null;
      state.rhythm = newRhythm;
    },
    setMeasures(state, action) {
      const numOfBeats = action.payload;
      const isInvalid =
        (state.rhythm.length === 16 && numOfBeats > 0) ||
        (state.rhythm.length === 4 && numOfBeats < 0);
      if (isInvalid) return;

      const newRhythm = [...state.rhythm];
      if (numOfBeats > 0) {
        newRhythm.push(...Array(numOfBeats).fill(null));
      } else {
        let numToUse = Math.abs(numOfBeats);
        let startSplice = newRhythm.length - numToUse;
        newRhythm.splice(startSplice, numToUse);
      }
      console.log(newRhythm)
      state.rhythm = newRhythm;
    },
    toggleLilyPadDisplay(state) {
      state.isDisplayingLilyPads = !state.isDisplayingLilyPads;
    },
    toggleAnimation(state) {
      state.isAnimating = !state.isAnimating;
    },
    clearGame(state) {
      state.rhythm = initialState.rhythm;
      state.isDisplayingLilyPads = initialState.isDisplayingLilyPads;
      state.isAnimating = initialState.isAnimating;
    }
  }
})

export const {
  addToRhythm,
  deleteFromRhythm,
  setMeasures,
  toggleLilyPadDisplay,
  toggleAnimation,
  clearGame
} = jumpIntoRhythmSlice.actions;

export default jumpIntoRhythmSlice.reducer;
