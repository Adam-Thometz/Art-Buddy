import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  valence: null,
  energy: null
}

const moodMeterSlice = createSlice({
  name: "moodMeter",
  initialState,
  reducers: {
    setValence(state, action) {
      state.valence = action.payload;
    },
    setEnergy(state, action) {
      state.energy = action.payload;
    },
    clearOptions(state) {
      state.valence = initialState.valence;
      state.energy = initialState.energy;
    }
  }
})

export const {
  setValence,
  setEnergy,
  clearOptions
} = moodMeterSlice.actions;
export default moodMeterSlice.reducer;
