import { createSlice } from "@reduxjs/toolkit";
import randomizeSong from "_utils/time-keeper/randomizeSong";

export const initialState = {
  song: [],
  secondsLeft: 0,
  isPlaying: false,
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
        return
      }
      state.secondsLeft = state.secondsLeft - 1;
    }
  }
})

const { addTimeBlocks, toggleTimer, decrementOneSecond } = timeKeeperSlice.actions;

export { addTimeBlocks, toggleTimer, decrementOneSecond };
export default timeKeeperSlice.reducer;
