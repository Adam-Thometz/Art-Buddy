import { addToSequence, changeCategory, removeFromSequence, resetSequence, setPitch, clearGame, setDuration, togglePlaying } from "../actions/sequenceMakerActions";
import { createReducer } from "@reduxjs/toolkit";

import soundInfo from "../../sequence-maker/_media/soundInfo";

export const INITIAL_STATE = {
  category: '',
  sequence: [null, null, null, null],
  pitch: '3',
  duration: 3
};

const sequenceMakerReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(changeCategory, (state, action) => {
      state.category = action.payload;
    })
    .addCase(addToSequence, (state, action) => {
      const id = action.payload;
      const currIdx = state.sequence.indexOf(null);
      if (currIdx === -1) return;
      const block = { 
        ...soundInfo[state.category][id],
        id,
        isPlaying: false
      };
      state.sequence[currIdx] = block;
    })
    .addCase(removeFromSequence, (state, action) => {
      const id = action.payload;
      state.sequence[id] = null;
    })
    .addCase(resetSequence, (state) => {
      state.sequence.fill(null);
    })
    .addCase(setPitch, (state, action) => {
      state.pitch = action.payload;
    })
    .addCase(setDuration, (state, action) => {
      state.duration = action.payload;
    })
    .addCase(togglePlaying, (state, action) => {
      const id = action.payload;
      const currIsPlaying = state.sequence[id].isPlaying;
      state.sequence[id].isPlaying = !currIsPlaying;
    })
    .addCase(clearGame, (state) => {
      state.category = '';
      state.sequence = [null, null, null, null];
      state.pitch = '3';
      state.duration = 3;
    });;
});

export default sequenceMakerReducer;