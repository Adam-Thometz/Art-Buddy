import { createAction } from "@reduxjs/toolkit";

export const createWords = createAction('createWords');
export const fillLetter = createAction('fillLetter');
export const changeScale = createAction('changeScale');
export const changeSound = createAction('changeSound');
export const toggleUpperCase = createAction('toggleUpperCase');
export const clearGame = createAction('clearGame');