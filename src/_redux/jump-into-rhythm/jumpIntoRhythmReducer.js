import { addToRhythm } from "./jumpIntoRhythmActions";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  rhythm: [null, null, null, null]
};

const jumpIntoRhythmReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addToRhythm, (state, action) => {

    })
});

export default jumpIntoRhythmReducer;