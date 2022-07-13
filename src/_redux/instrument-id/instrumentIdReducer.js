import { clearChoices, generateAnswer, selectChoice, addInstrument, selectInstrument, selectMelody, clearSong, removeInstrument } from "./insturmentIdActions";
import { createReducer } from "@reduxjs/toolkit";

import getInstrument from "_helpers/instrument-id/getInstrument";
import getChoices from "_helpers/instrument-id/getChoices";

export const defaultInstrument = {
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
      const selection = getChoices({ level, choice });
      const { instrumentChoice, instrumentChoice2 } = selection;

      if (!instrumentChoice && !instrumentChoice2) {
        state[`choice${id}`] = selection;
      } else {
        state.choice1 = instrumentChoice;
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
    .addCase(removeInstrument, (state, action) => {
      const id = action.payload;
      state.song[id] = null;
    })
    .addCase(selectInstrument, (state, action) => {
      const { id, instrumentId } = action.payload;
      const instrument = getInstrument(instrumentId);
      const { isRhythm } = instrument;
      const currInstrument = state.song[id];
      const isCurrInstrumentRhythm = currInstrument ? currInstrument.isRhythm : !isRhythm;
      const melodyId = (isCurrInstrumentRhythm === isRhythm) ?
        state.song[id].melodyId :
        null
      const newInstrument = {
        instrumentId,
        isRhythm,
        melodyId
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
    .addCase(clearSong, (state) => {
      state.song = [defaultInstrument, null, null, null];
    })
});

export default instrumentIdReducer;