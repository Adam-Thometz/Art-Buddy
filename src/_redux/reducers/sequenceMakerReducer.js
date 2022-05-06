import { addBlock, addToSequence, changeCategory, playAllSequence, playSequence, removeBlock, removeFromSequence, resetSequence, setPitch } from "../actions/sequenceMakerActions";
import { createReducer } from "@reduxjs/toolkit";

import sample from "../../_utils/sample";
import soundInfo from "../../sequence-maker/_media/soundInfo";
import { sounds } from "../../sequence-maker/_media/soundImageImports";
import pitches from "../../sequence-maker/_utils/pitchMap";
import { now } from "tone";

export const INITIAL_STATE = {
  category: '',
  sequence: [null, null, null, null],
};

const sequenceMakerReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(changeCategory, (state, action) => {
      state.category = action.payload;
    })
    .addCase(addToSequence, (state, action) => {
      const sound = action.payload;
      const currIdx = state.sequence.indexOf(null);
      if (currIdx === -1) return;
      const block = { 
        ...soundInfo[state.category][sound],
        id: currIdx,
        pitch: 'medium',
        sound: sound === 'stop' ? null : sample(sounds[sound])
      };
      state.sequence[currIdx] = block;
    })
    .addCase(removeFromSequence, (state, action) => {
      const id = action.payload;
      state.sequence[id] = null;
    })
    .addCase(addBlock, (state) => {
      state.sequence.push(null);
    })
    .addCase(removeBlock, (state) => {
      state.sequence.pop();
    })
    .addCase(playSequence, (state) => {
      const start = now();
      for (let i = 0; i < state.sequence.length; i++) {
        const { sound, pitch } = state.sequence[i];
        const seconds = i * 4;
        if (sound === null) {
          continue;
        } else {
          sound.triggerAttackRelease(`C${pitches[pitch]}`, '2m', start + seconds)
        };
      };
    })
    .addCase(playAllSequence, (state) => {
      const start = now();
      for (let i = 0; i < state.sequence.length; i++) {
        const { sound, pitch } = state.sequence[i];
        if (sound === null) continue;
        sound.triggerAttackRelease(`C${pitches[pitch]}`, '2m', start)
      }
    })
    .addCase(resetSequence, (state) => {
      state.sequence.fill(null);
    })
    .addCase(setPitch, (state, action) => {
      const { id, pitch } = action.payload;
      state.sequence[id].pitch = pitch;
    });
});

export default sequenceMakerReducer;