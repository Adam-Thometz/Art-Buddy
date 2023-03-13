import { createReducer } from "@reduxjs/toolkit";
import randomizeSong from "_utils/time-keeper/randomizeSong";
import { addOneChunk, toggleTimer } from "./timeKeeperActions";

export const INITIAL_STATE = {
  song: [],
  secondsLeft: 0,
  isPlaying: false,
};

const timeKeeperReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addOneChunk, (state, action) => {
      const { mood, seconds, music } = action.payload;
      const newSong = [...state.song];
      const musicToAdd = !music ? randomizeSong({ seconds, mood }) : [{ music, seconds, mood }];
      newSong.push(...musicToAdd);
      state.song = newSong;
      state.secondsLeft = state.secondsLeft + seconds;
    })
    .addCase(toggleTimer, (state) => {
      state.isPlaying = !state.isPlaying;
    });
});

export default timeKeeperReducer;
