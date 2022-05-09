import { createSound, generateAnswer, playSound, selectChoice } from "../actions/insturmentIdActions";
import { createReducer } from "@reduxjs/toolkit";

import learnInstrumentOptions from '../../instrument-id/learnInstrumentOptions';

const INITIAL_STATE = {
  choice1: null,
  choice2: null,
  answer: null
}

const instrumentIdReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(selectChoice, (state, action) => {
      const { id, level, choice } = action.payload;
      const choices = learnInstrumentOptions[choice].instruments;
      if (level === '1') {
        if (id === '1') {
          const instrument1Idx = Math.floor(Math.random() * choices.length);
          state.choice1 = choices[instrument1Idx];
        } else if (id === '2') {
          const instrument2Idx = Math.floor(Math.random() * choices.length);
          state.choice2 = choices[instrument2Idx];
        }
      } else {
        const instrument1Idx = Math.floor(Math.random() * choices.length);
        state.choice1 = choices[instrument1Idx];
        let instrument2Idx = instrument1Idx;
        while (instrument2Idx === instrument1Idx) {
          instrument2Idx = Math.floor(Math.random() * choices.length);
        }
        state.choice2 = choices[instrument2Idx];
      }
    })
    .addCase(generateAnswer, (state, action) => {
      const { choice1, choice2 } = action.payload;
      const answer = Math.ceil(Math.random() * 2);
      // debugger;
      state.answer = answer === 1 ? choice1 : choice2;
    })
    .addCase(createSound, (state, action) => {
      // const instrument = action.payload;
      // const sound = storedSounds[instrument];
    })
    .addCase(playSound, (state, action) => {
      const sound = action.payload;
      const audio = new Audio(sound);
      audio.play();
    })
});

export default instrumentIdReducer;