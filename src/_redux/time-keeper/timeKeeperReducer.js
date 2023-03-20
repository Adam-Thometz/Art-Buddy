import { createReducer } from "@reduxjs/toolkit";
import randomizeSong from "_utils/time-keeper/randomizeSong";
import { addTimeBlocks, toggleTimer } from "./timeKeeperActions";

export const INITIAL_STATE = {
  song: [],
  secondsLeft: 0,
  isPlaying: false,
};

const timeKeeperReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addTimeBlocks, (state, action) => {
      const { mood, seconds, music } = action.payload;
      const newSong = [...state.song];
      const musicToAdd = music
        ? [{ music, seconds, mood }]
        : randomizeSong({ seconds, mood });
      newSong.push(...musicToAdd);
      state.song = newSong;
      state.secondsLeft = newSong.reduce((acc, curr) => acc + curr.seconds, 0);
    })
    .addCase(toggleTimer, (state) => {
      state.isPlaying = !state.isPlaying;
    });
});

export default timeKeeperReducer;
