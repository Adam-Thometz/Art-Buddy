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

const { setValence, setEnergy, clearOptions } = moodMeterSlice.actions;

export {
  setValence,
  setEnergy,
  clearOptions
}
export default moodMeterSlice.reducer;

// const moodMeterSlice = createSlice({
//   name: "moodMeter",
//   initialState,
//   reducers: {
//     setValence(state, action) {
//       state.valence = action.payload;
//     },
//     setEnergy(state, action) {
//       state.energy = action.payload;
//     },
//     clearOptions(state, action) {
//       state.valence = initialState.valence;
//       state.energy = initialState.energy;
//     },
//   },
// });

// console.log(moodMeterSlice)

// export const { setValence, setEnergy, clearOptions } = moodMeterSlice.actions;
// export const moodMeterSlice.initialState;
// export default moodMeterSlice.reducer;

// import { setValence, setEnergy, clearOptions } from "./moodMeterActions";
// import { createReducer } from "@reduxjs/toolkit";

// export const INITIAL_STATE = {
//   valence: null,
//   energy: null,
// };

// const moodMeterReducer = createReducer(INITIAL_STATE, (builder) => {
//   builder
//     .addCase(setValence, (state, action) => {
//       state.valence = action.payload;
//     })
//     .addCase(setEnergy, (state, action) => {
//       state.energy = action.payload;
//     })
//     .addCase(clearOptions, (state) => {
//       state.valence = INITIAL_STATE.valence;
//       state.energy = INITIAL_STATE.energy;
//     });
// });

// export default moodMeterReducer;
