import { createSlice } from "@reduxjs/toolkit";
import randomizeSong from "_utils/time-keeper/randomizeSong";

export const initialState = {
  song: [],
  secondsLeft: 0,
  isPlaying: false,
  millisecondsLeft: 0,
  currSong: 0,
};

const timeKeeperSlice = createSlice({
  name: "timeKeeper",
  initialState,
  reducers: {
    addTimeBlocks(state, action) {
      const { mood, seconds, music } = action.payload;
      const newSong = [...state.song];
      const musicToAdd = music
        ? [{ music, seconds, mood }]
        : randomizeSong({ seconds, mood });
      newSong.push(...musicToAdd);
      state.song = newSong;
      state.secondsLeft = newSong.reduce((acc, curr) => acc + curr.seconds, 0);
    },
    toggleTimer(state) {
      state.isPlaying = !state.isPlaying;
    },
    decrementOneSecond(state) {
      if (state.secondsLeft === 0) {
        state.isPlaying = !state.isPlaying;
      } else {
        state.secondsLeft = state.secondsLeft - 1;
      }
    },
    setMillisecondsLeftInSecond(state, action) {
      state.millisecondsLeft = action.payload;
    }
  }
})

export const {
  addTimeBlocks,
  toggleTimer,
  decrementOneSecond,
  setMillisecondsLeftInSecond,
} = timeKeeperSlice.actions;

export default timeKeeperSlice.reducer;
