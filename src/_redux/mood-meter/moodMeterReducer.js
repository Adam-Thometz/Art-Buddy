import { setValence, setEnergy, clearOptions } from "./moodMeterActions";
import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  valence: null,
  energy: null,
};

const moodMeterReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(setValence, (state, action) => {
      state.valence = action.payload;
    })
    .addCase(setEnergy, (state, action) => {
      state.energy = action.payload;
    })
    .addCase(clearOptions, (state) => {
      state.valence = INITIAL_STATE.valence;
      state.energy = INITIAL_STATE.energy;
    });
});

export default moodMeterReducer