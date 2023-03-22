const { createAction } = require("@reduxjs/toolkit");

export const goToNextQuestion = createAction("goToNextQuestion");
export const goToNextSection = createAction("goToNextSection");
export const goToNextSubLevel = createAction("goToNextSubLevel");
export const goToNextLevel = createAction("goToNextLevel");
export const toggleIsIncorrect = createAction("toggleIsIncorrect");