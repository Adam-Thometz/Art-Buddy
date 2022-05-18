import { createAction } from "@reduxjs/toolkit";

// Listening skills
export const selectChoice = createAction('selectChoice');
export const generateAnswer = createAction('generateAnswer');
export const loadReportCards = createAction('loadReportCards');
export const updateReportCard = createAction('updateReportCard');
export const clearChoices = createAction('clearChoices');
export const clearReportCards = createAction('clearReportCards');

// Song maker
export const addInstrument = createAction('addInstrument');
export const selectInstrument = createAction('selectInstrument');
export const selectMelody = createAction('selectMelody');