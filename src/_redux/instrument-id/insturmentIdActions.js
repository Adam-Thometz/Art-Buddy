import { createAction } from "@reduxjs/toolkit";

// Listening skills
export const selectChoice = createAction('selectChoice');
export const generateAnswer = createAction('generateAnswer');
export const clearChoices = createAction('clearChoices');

// Song maker
export const addInstrument = createAction('addInstrument');
export const selectInstrument = createAction('selectInstrument');
export const selectMelody = createAction('selectMelody');
export const clearSong = createAction('clearSong');