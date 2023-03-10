import { createReducer } from "@reduxjs/toolkit";
import { addOneChunk, toggleTimer } from "./timeKeeperActions";

export const INITIAL_STATE = {
  song: [],
  isPlaying: false,
};

const timeKeeperReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addOneChunk, (state, action) => {
      const pieceToAdd = action.payload;
      const newSong = [...state.song];
      newSong.push(pieceToAdd);
      state.song = newSong;
    })
    .addCase(toggleTimer, (state) => {
      state.isPlaying = !state.isPlaying;
    });
});

export default timeKeeperReducer;
