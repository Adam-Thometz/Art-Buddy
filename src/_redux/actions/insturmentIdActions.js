import { createAction } from "@reduxjs/toolkit";

export const selectChoice = createAction('selectChoice');
export const generateAnswer = createAction('generateAnswer');
export const updateReportCard = createAction('updateReportCard');
export const clearChoices = createAction('clearChoices');
export const clearReportCards = createAction('clearReportCards');
export const createSound = createAction('createSound');
export const playSound = createAction('playSound');