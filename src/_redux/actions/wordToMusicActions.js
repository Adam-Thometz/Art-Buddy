import { createAction } from "@reduxjs/toolkit";

export const createWords = createAction('createWords');
export const fillLetter = createAction('fillLetter');
export const playNote = createAction('playNote');
export const playMelody = createAction('playMelody');
export const changeScale = createAction('changeScale');
export const toggleUpperCase = createAction('toggleUpperCase');
export const clearGame = createAction('clearGame');