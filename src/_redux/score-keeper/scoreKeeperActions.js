import { createAction } from "@reduxjs/toolkit";

export const loadStudents = createAction('loadStudents');
export const addPoint = createAction('addPoint');
export const removePoint = createAction('removePoint');
export const resetScores = createAction('resetScores');
export const clearGame = createAction('clearGame');