import { createAction } from "@reduxjs/toolkit";

export const addStudent = createAction('addStudent');
export const removeStudent = createAction('removeStudent');
export const addPoint = createAction('addPoint');
export const removePoint = createAction('removePoint');
export const toggleGameOver = createAction('toggleGameOver');
export const resetScores = createAction('resetScores');