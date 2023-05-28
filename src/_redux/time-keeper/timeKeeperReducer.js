import { createSlice } from "@reduxjs/toolkit";
import randomizeSong from "_utils/time-keeper/randomizeSong";

export const initialState = {
  song: [],
  totalLength: 0,
  isMuted: false,
  secondsLeft: 0,
  isPlaying: false,
  millisecondsLeft: 0,
  currSongIdx: 0,
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
      const totalLength = newSong.reduce((acc, curr) => acc + curr.seconds, 0)
      state.secondsLeft = state.isPlaying
        ? state.secondsLeft + seconds
        : totalLength;
      state.totalLength = totalLength;
    },
    toggleTimer(state) {
      state.isPlaying = !state.isPlaying;
    },
    decrementOneSecond(state) {
      if (state.secondsLeft === 0) {
        state.isPlaying = false;
      } else {
        state.secondsLeft = state.secondsLeft - 1;
      }
    },
    toggleMute(state) {
      state.isMuted = !state.isMuted;
    },
    setMillisecondsLeftInSecond(state, action) {
      state.millisecondsLeft = action.payload;
    },
    goToNextSong(state) {
      if (state.currSongIdx + 1 === state.song.length) {
        state.currSongIdx = 0;
        state.secondsLeft = state.totalLength;
      } else {
        state.currSongIdx = state.currSongIdx + 1;
      }
    },
    resetSong(state) {
      state.secondsLeft = state.totalLength;
      state.currSongIdx = 0;
      state.isPlaying = false;
    },
    clearSong(state) {
      state.song = initialState.song;
      state.totalLength = initialState.totalLength;
      state.isMuted = initialState.isMuted;
      state.secondsLeft = initialState.secondsLeft;
      state.isPlaying = initialState.isPlaying;
      state.millisecondsLeft = initialState.millisecondsLeft;
      state.currSongIdx = initialState.currSongIdx;
    }
  }
});

export const {
  addTimeBlocks,
  toggleTimer,
  toggleMute,
  decrementOneSecond,
  setMillisecondsLeftInSecond,
  goToNextSong,
  resetSong,
  clearSong
} = timeKeeperSlice.actions;

export default timeKeeperSlice.reducer;
