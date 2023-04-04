import { createSlice } from "@reduxjs/toolkit";
import getInstrument from "_utils/instrument-id/getInstrument";

export const defaultInstrument = {
  instrumentId: null,
  melodyId: null,
  isRhythm: null,
};

export const initialState = {
  song: [defaultInstrument, null, null, null],
  isPlaying: false,
  currTimer: null,
};

const songMakerSlice = createSlice({
  name: "songMaker",
  initialState,
  reducers: {
    addInstrument(state, action) {
      const id = action.payload;
      state.song[id] = defaultInstrument;
    },
    removeInstrument(state, action) {
      const id = action.payload;
      state.song[id] = null;
    },
    selectInstrument(state, action) {
      const { id, instrumentId } = action.payload;
      const instrument = getInstrument(instrumentId);
      const { isRhythm } = instrument;
      const currInstrument = state.song[id];
      const isCurrInstrumentRhythm = currInstrument
        ? currInstrument.isRhythm
        : !isRhythm;
      const melodyId =
        isCurrInstrumentRhythm === isRhythm ? state.song[id].melodyId : null;
      const newInstrument = { instrumentId, isRhythm, melodyId };
      state.song[id] = newInstrument;
    },
    selectMelody(state, action) {
      const { id, melodyId } = action.payload;
      const instrumentWithMelody = {
        ...state.song[id],
        melodyId,
      };
      state.song[id] = instrumentWithMelody;
    },
    toggleLoop(state) {
      state.isPlaying = !state.isPlaying;
    },
    clearSong(state) {
      state.song = initialState.song;
      state.isPlaying = initialState.isPlaying;
      state.currTimer = initialState.currTimer;
    }
  }
})

const { addInstrument, removeInstrument, selectInstrument, selectMelody, toggleLoop, clearSong } = songMakerSlice.actions;

export {
  addInstrument,
  removeInstrument,
  selectInstrument,
  selectMelody,
  toggleLoop,
  clearSong
}

export default songMakerSlice.reducer;
