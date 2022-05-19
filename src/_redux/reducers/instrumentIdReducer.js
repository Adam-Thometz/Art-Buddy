import { clearChoices, generateAnswer, selectChoice, addInstrument, selectInstrument, selectMelody } from "../actions/insturmentIdActions";
import { createReducer } from "@reduxjs/toolkit";

import learnInstrumentOptions from '../../instrument-id/learnInstrumentOptions';
import getInstrument, { isRhythmicInstrument } from "../../instrument-id/_utils/getInstrument";

const defaultInstrument = {
  instrumentId: null,
  melodyId: null,
  isRhythm: null
}

const INITIAL_STATE = {
  // Listening Skills Test
  choice1: null,
  choice2: null,
  answer: null,
  // Song Maker
  song: [defaultInstrument, null, null, null],
};

const instrumentIdReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(selectChoice, (state, action) => {
      const { id, level, choice } = action.payload;
      const choices = learnInstrumentOptions[choice].instruments;
      if (level === '1') {
        if (id === '1') {
          const instrument1Idx = Math.floor(Math.random() * choices.length);
          const instrumentChoice = { ...choices[instrument1Idx], family: choice };
          state.choice1 = instrumentChoice;
        } else if (id === '2') {
          const instrument2Idx = Math.floor(Math.random() * choices.length);
          const instrumentChoice = { ...choices[instrument2Idx], family: choice };
          state.choice2 = instrumentChoice;
        };
      } else {
        const instrument1Idx = Math.floor(Math.random() * choices.length);
        const instrumentChoice1 = { ...choices[instrument1Idx], family: choice };
        state.choice1 = instrumentChoice1;
        let instrument2Idx = instrument1Idx;
        while (instrument2Idx === instrument1Idx) {
          instrument2Idx = Math.floor(Math.random() * choices.length);
        };
        const instrumentChoice2 = { ...choices[instrument2Idx], family: choice };
        state.choice2 = instrumentChoice2;
      };
    })
    .addCase(generateAnswer, (state, action) => {
      const { choice1, choice2 } = action.payload;
      const answer = Math.ceil(Math.random() * 2);
      state.answer = answer === 1 ? choice1 : choice2;
    })
    .addCase(clearChoices, (state) => {
      state.choice1 = null;
      state.choice2 = null;
      state.answer = null;
    })
    .addCase(addInstrument, (state, action) => {
      const id = action.payload;
      state.song[id] = defaultInstrument;
    })
    .addCase(selectInstrument, (state, action) => {
      const { id, instrumentId } = action.payload;
      const instrument = getInstrument(instrumentId);
      const isRhythm = isRhythmicInstrument(instrument);
      const newInstrument = {
        ...state.song[id],
        instrumentId,
        isRhythm
      };
      state.song[id] = newInstrument;
    })
    .addCase(selectMelody, (state, action) => {
      const { id, melodyId } = action.payload;
      const instrumentWithMelody = {
        ...state.song[id],
        melodyId
      };
      state.song[id] = instrumentWithMelody;
    })
});

export default instrumentIdReducer;