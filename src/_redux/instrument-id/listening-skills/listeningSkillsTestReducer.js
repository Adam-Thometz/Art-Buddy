import { clearChoices, generateAnswer, selectChoice } from "./listeningSkillsTestActions";
import { createReducer } from "@reduxjs/toolkit";

import getChoices from "_utils/instrument-id/getChoices";

export const INITIAL_STATE = {
  choice1: null,
  choice2: null,
  answer: null,
};

const listeningSkillsTestReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(selectChoice, (state, action) => {
      const { id, level, choice } = action.payload;
      const selection = getChoices({ level, choice });
      const { instrumentChoice, instrumentChoice2 } = selection;

      if (!instrumentChoice && !instrumentChoice2) {
        state[`choice${id}`] = selection;
      } else {
        state.choice1 = instrumentChoice;
        state.choice2 = instrumentChoice2;
      };
    })
    .addCase(generateAnswer, (state, action) => {
      const { choice1, choice2 } = action.payload;
      const answer = Math.ceil(Math.random() * 2);
      state.answer = answer === 1 ? choice1 : choice2;
    })
    .addCase(clearChoices, (state) => {
      state.choice1 = INITIAL_STATE.choice1;
      state.choice2 = INITIAL_STATE.choice2;
      state.answer = INITIAL_STATE.answer;
    });
});

export default listeningSkillsTestReducer;