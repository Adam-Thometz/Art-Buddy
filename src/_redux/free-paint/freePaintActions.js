import { createAction } from "@reduxjs/toolkit";

export const setColor = createAction('setColor');
export const setDisplay = createAction('setDisplay');
export const setIsErasing = createAction('setIsErasing');
export const clearGame = createAction('clearGame');