import {
  addToSequence,
  setCategory,
  removeFromSequence,
  resetSequence,
  setPitch,
  clearGame,
  setDuration,
  togglePlaying,
} from "./sequenceMakerActions";
import { createReducer } from "@reduxjs/toolkit";

import soundInfo from "_data/sequence-maker/soundInfo";

export const INITIAL_STATE = {
  category: null,
  sequence: [null, null, null, null],
  pitch: 3,
  duration: 3,
  isPlaying: false,
};

const sequenceMakerReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(setCategory, (state, action) => {
      state.category = action.payload;
    })
    .addCase(addToSequence, (state, action) => {
      const soundId = action.payload;
      const currIdx = state.sequence.indexOf(null);
      if (currIdx === -1) return;
      const block = {
        ...soundInfo[state.category][soundId],
        soundId,
        isPlaying: false,
      };
      state.sequence[currIdx] = block;
    })
    .addCase(removeFromSequence, (state, action) => {
      const id = action.payload;
      const newSequence = state.sequence;
      newSequence[id] = null;
      state.sequence = newSequence;
    })
    .addCase(resetSequence, (state) => {
      const resetSequence = Array(4).fill(null);
      state.sequence = resetSequence;
    })
    .addCase(setPitch, (state, action) => {
      state.pitch = action.payload;
    })
    .addCase(setDuration, (state, action) => {
      state.duration = action.payload;
    })
    .addCase(togglePlaying, (state, action) => {
      const id = action.payload;
      const newSequence = state.sequence;
      newSequence[id].isPlaying = !newSequence[id].isPlaying;
      state.sequence = newSequence;
      state.isPlaying = newSequence.some((block) => block && block.isPlaying);
    })
    .addCase(clearGame, (state) => {
      state.category = INITIAL_STATE.category;
      state.sequence = INITIAL_STATE.sequence;
      state.pitch = INITIAL_STATE.pitch;
      state.duration = INITIAL_STATE.duration;
    });
});

export default sequenceMakerReducer;
