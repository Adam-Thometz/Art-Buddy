import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isRecording: false,
  meterVolume: 0
}

const noiseMeterSlice = createSlice({
  name: "noiseMeter",
  initialState,
  reducers: {
    toggleRecording(state) {
      state.isRecording = !state.isRecording;
    },
    setMeterVolume(state, action) {
      const meterVolume = action.payload;
      state.meterVolume = meterVolume;
    }
  }
});

export const { toggleRecording, setMeterVolume } = noiseMeterSlice.actions;

export default noiseMeterSlice.reducer;
