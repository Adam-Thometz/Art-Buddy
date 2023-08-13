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
      const newRhythm = state.rhythm;
      const numOfBeats = action.payload;
      const isInvalid =
        (newRhythm.length === 16 && numOfBeats > 0) ||
        (newRhythm.length === 4 && numOfBeats < 0);
      if (isInvalid) return;
      for (let i = 1; i <= Math.abs(numOfBeats); i++) {
        numOfBeats > 0 ? newRhythm.push(null) : newRhythm.pop();
        state.rhythm = newRhythm;
      }
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
