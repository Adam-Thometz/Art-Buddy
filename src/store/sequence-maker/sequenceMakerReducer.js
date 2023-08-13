import { createSlice } from "@reduxjs/toolkit";
import soundInfo from "data/sequence-maker/soundInfo";

export const initialState = {
  category: null,
  sequence: [null, null, null, null],
  pitch: 3,
  duration: 3,
  isPlaying: false,
};

const sequenceMakerSlice = createSlice({
  name: "sequenceMaker",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    addToSequence(state, action) {
      const soundId = action.payload;
      const currIdx = state.sequence.indexOf(null);
      if (currIdx === -1) return;
      const block = {
        ...soundInfo[state.category][soundId],
        soundId,
        isPlaying: false,
      };
      state.sequence[currIdx] = block;
    },
    removeFromSequence(state, action) {
      const id = action.payload;
      const newSequence = state.sequence;
      newSequence[id] = null;
      state.sequence = newSequence;
    },
    resetSequence(state) {
      const resetSequence = Array(4).fill(null);
      state.sequence = resetSequence;
    },
    setPitch(state, action) {
      state.pitch = action.payload;
    },
    setDuration(state, action) {
      state.duration = action.payload;
    },
    togglePlaying(state, action) {
      const id = action.payload;
      const newSequence = state.sequence;
      newSequence[id].isPlaying = !newSequence[id].isPlaying;
      state.sequence = newSequence;
      state.isPlaying = newSequence.some((block) => block && block.isPlaying);
    },
    clearGame(state) {
      state.category = initialState.category;
      state.sequence = initialState.sequence;
      state.pitch = initialState.pitch;
      state.duration = initialState.duration;
    }
  }
})

export const {
  setCategory,
  addToSequence,
  removeFromSequence,
  resetSequence,
  setPitch,
  setDuration,
  togglePlaying,
  clearGame
} = sequenceMakerSlice.actions;

export default sequenceMakerSlice.reducer;
