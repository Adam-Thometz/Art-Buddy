import { clearChoices, generateAnswer, selectChoice, addInstrument, selectInstrument, selectMelody } from "../actions/insturmentIdActions";
import { createReducer } from "@reduxjs/toolkit";

import learnInstrumentOptions from '../../instrument-id/learnInstrumentOptions';
import getInstrument, { isRhythmicInstrument } from "../../instrument-id/_utils/getInstrument";
import { getChoice, getChoices } from "../helpers/getChoice";

const defaultInstrument = {
  instrumentId: null,
  melodyId: null,
  isRhythm: null
}

export const INITIAL_STATE = {
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
        const instrumentChoice = getChoice({ choices, choice });
        state[`choice${id}`] = instrumentChoice;
      } else {
        const { instrumentChoice1, instrumentChoice2 } = getChoices({ choice, choices });
        state.choice1 = instrumentChoice1;
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