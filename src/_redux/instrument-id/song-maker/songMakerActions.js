import { createAction } from "@reduxjs/toolkit";

export const addInstrument = createAction("addInstrument");
export const removeInstrument = createAction("removeInstrument");
export const selectInstrument = createAction("selectInstrument");
export const selectMelody = createAction("selectMelody");
export const toggleLoop = createAction("toggleLoop");
export const clearSong = createAction("clearSong");
