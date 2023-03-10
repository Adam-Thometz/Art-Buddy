import { createReducer } from "@reduxjs/toolkit";
import { addOneChunk, toggleTimer } from "./timeKeeperActions";

export const INITIAL_STATE = {
  song: [],
  secondsLeft: 0,
  isPlaying: false,
};

const timeKeeperReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addOneChunk, (state, action) => {
      const { music, seconds } = action.payload;
      const newSong = [...state.song];
      newSong.push(music);
      state.song = newSong;
      state.secondsLeft = state.secondsLeft + seconds;
    })
    .addCase(toggleTimer, (state) => {
      state.isPlaying = !state.isPlaying;
    });
});

export default timeKeeperReducer;
