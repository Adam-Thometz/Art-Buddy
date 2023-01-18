import { createAction } from "@reduxjs/toolkit";

// Listening skills
export const selectChoice = createAction("selectChoice");
export const generateAnswer = createAction("generateAnswer");
export const clearChoices = createAction("clearChoices");
