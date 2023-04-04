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
    }
  }
})

const { addTimeBlocks, toggleTimer } = timeKeeperSlice.actions;

export { addTimeBlocks, toggleTimer };
export default timeKeeperSlice.reducer;
