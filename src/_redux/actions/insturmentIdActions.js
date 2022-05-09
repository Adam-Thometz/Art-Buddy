import { createAction } from "@reduxjs/toolkit";

export const selectChoice = createAction('selectChoice');
export const createSound = createAction('createSound');
export const generateAnswer = createAction('generateAnswer');
export const playSound = createAction('playSound');