import { clearChoices, createSound, generateAnswer, playSound, selectChoice } from "../actions/insturmentIdActions";
import { createReducer } from "@reduxjs/toolkit";

import learnInstrumentOptions from '../../instrument-id/learnInstrumentOptions';
import getReportCards from "../helpers/getReportCards";

const INITIAL_STATE = {
  choice1: null,
  choice2: null,
  answer: null,
  reportCard1: null,
  reportCard2: null
}

const instrumentIdReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(selectChoice, (state, action) => {
      const { id, level, choice } = action.payload;
      const choices = learnInstrumentOptions[choice].instruments;
      if (level === '1') {
        if (id === '1') {
          const instrument1Idx = Math.floor(Math.random() * choices.length);
          const instrumentChoice = { ...choices[instrument1Idx], family: choice }
          state.choice1 = instrumentChoice;
        } else if (id === '2') {
          const instrument2Idx = Math.floor(Math.random() * choices.length);
          const instrumentChoice = { ...choices[instrument2Idx], family: choice }
          state.choice2 = instrumentChoice;
        }
      } else {
        const instrument1Idx = Math.floor(Math.random() * choices.length);
        const instrumentChoice1 = { ...choices[instrument1Idx], family: choice }
        state.choice1 = instrumentChoice1;
        let instrument2Idx = instrument1Idx;
        while (instrument2Idx === instrument1Idx) {
          instrument2Idx = Math.floor(Math.random() * choices.length);
        }
        const instrumentChoice2 = { ...choices[instrument2Idx], family: choice }
        state.choice2 = instrumentChoice2;
      }
    })
    .addCase(generateAnswer, (state, action) => {
      const { choice1, choice2 } = action.payload;
      const answer = Math.ceil(Math.random() * 2);
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
    .addCase(clearChoices, (state, action) => {
      state.choice1 = null;
      state.choice2 = null;
      state.answer = null;
    });
});

export default instrumentIdReducer;