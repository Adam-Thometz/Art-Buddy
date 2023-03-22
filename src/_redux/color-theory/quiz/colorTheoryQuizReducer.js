import { goToNextQuestion, goToNextSection, goToNextSubLevel, goToNextLevel, gotIncorrect } from "./colorTheoryQuizActions";

import { createReducer } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  answerIdx: 0,
  section: 0,
  subLevel: "A",
  gotIncorrect: false,
};

// TODO: Complete!

const colorTheoryQuizReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(goToNextQuestion, (state, action) => {

    })
});

export default colorTheoryQuizReducer;