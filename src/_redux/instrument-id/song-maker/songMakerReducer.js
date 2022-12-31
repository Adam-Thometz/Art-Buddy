import { addInstrument, selectInstrument, selectMelody, clearSong, removeInstrument, toggleLoop, setCurrTimer } from "./songMakerActions";
import { createReducer } from "@reduxjs/toolkit";

import getInstrument from "_utils/instrument-id/getInstrument";

export const defaultInstrument = {
  instrumentId: null,
  melodyId: null,
  isRhythm: null
};

export const INITIAL_STATE = {
  song: [defaultInstrument, null, null, null],
  isPlaying: false,
  currTimer: null
};

const songMakerReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
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
      const melodyId = (isCurrInstrumentRhythm === isRhythm)
        ? state.song[id].melodyId
        : null;
      const newInstrument = { instrumentId, isRhythm, melodyId };
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
    .addCase(toggleLoop, (state) => {
      state.isPlaying = !state.isPlaying;
    })
    .addCase(setCurrTimer, (state, action) => {
      const timerId = action.payload;
      state.currTimer = timerId;
    })
    .addCase(clearSong, (state) => {
      state.song = INITIAL_STATE.song;
      state.isPlaying = INITIAL_STATE.isPlaying;
      state.currTimer = INITIAL_STATE.currTimer;
    });
});

export default songMakerReducer;