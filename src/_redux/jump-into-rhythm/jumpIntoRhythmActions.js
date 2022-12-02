import { createAction } from "@reduxjs/toolkit";

export const addToRhythm = createAction('addToRhythm');
export const deleteFromRhythm = createAction('deleteFromRhythm');
export const toggleHasExtraMeasure = createAction('toggleHasExtraMeasure');
export const setMeasures = createAction('setMeasures');
export const toggleLilyPadDisplay = createAction('toggleLilyPadDisplay');
export const clearGame = createAction('clearGame');