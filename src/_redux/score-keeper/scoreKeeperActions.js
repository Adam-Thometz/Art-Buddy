import { createAction } from "@reduxjs/toolkit";

export const loadStudents = createAction('loadStudents');
export const addStudent = createAction('addStudent');
export const removeStudent = createAction('removeStudent');
export const addPoint = createAction('addPoint');
export const removePoint = createAction('removePoint');
export const toggleGameOver = createAction('toggleGameOver');
export const resetScores = createAction('resetScores');
export const clearGame = createAction('clearGame');