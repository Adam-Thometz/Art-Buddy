import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isRecording: false,
  volume: 0
}

const noiseMeterSlice = createSlice({
  name: "noiseMeter",
  initialState,
  reducers: {
    toggleRecording(state) {
      state.isRecording = !state.isRecording;
    }
  }
});

export const { toggleRecording } = noiseMeterSlice.actions;

export default noiseMeterSlice.reducer