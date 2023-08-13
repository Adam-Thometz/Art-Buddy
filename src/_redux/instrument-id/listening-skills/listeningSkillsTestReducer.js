import { createSlice } from "@reduxjs/toolkit";
import getChoices from "_utils/instrument-id/getChoices";

export const initialState = {
  choice1: null,
  choice2: null,
  answer: null,
};

const listeningSkillsTestSlice = createSlice({
  name: "listeningSkillsTest",
  initialState,
  reducers: {
    selectChoice(state, action) {
      const { id, level, choice } = action.payload;
      const selection = getChoices({ level, choice });
      const { instrumentChoice, instrumentChoice2 } = selection;

      if (!instrumentChoice && !instrumentChoice2) {
        state[`choice${id}`] = selection;
      } else {
        state.choice1 = instrumentChoice;
        state.choice2 = instrumentChoice2;
      }
    },
    generateAnswer(state, action) {
      const { choice1, choice2 } = action.payload;
      const answer = Math.ceil(Math.random() * 2);
      state.answer = answer === 1 ? choice1 : choice2;
    },
    clearChoices(state) {
      state.choice1 = initialState.choice1;
      state.choice2 = initialState.choice2;
      state.answer = initialState.answer;
    }
  }
});

export const {
  selectChoice,
  generateAnswer,
  clearChoices
} = listeningSkillsTestSlice.actions;

export default listeningSkillsTestSlice.reducer;
