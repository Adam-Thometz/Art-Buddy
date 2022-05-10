import { createAction } from "@reduxjs/toolkit";

export const addWord = createAction('addWord');
export const createWord = createAction('createWord');
export const fillLetter = createAction('fillLetter');
export const playNote = createAction('playNote');
export const playMelody = createAction('playMelody');
export const changeScale = createAction('changeScale');
export const clearGame = createAction('clearGame');