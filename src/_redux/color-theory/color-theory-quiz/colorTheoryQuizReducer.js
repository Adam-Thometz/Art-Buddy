import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  subLevel: "A",
  section: 0,
  answerIdx: 0,
  incorrect: false,
}

const colorTheoryQuizSlice = createSlice({
  name: "colorTheoryQuiz",
  initialState,
  reducers: {
    nextQuestion(state) {
      state.answerIdx = state.answerIdx + 1;
      state.incorrect = false
    },
    nextSection(state) {
      state.section = state.section + 1;
      state.answerIdx = 0;
    },
    nextSublevel(state) {
      state.subLevel = "B";
      state.section = 0;
      state.answerIdx = 0;
    },
    nextLevel(state) {
      state.subLevel = "A";
      state.section = 0;
      state.answerIdx = 0;
    },
    gotIncorrect(state) {
      state.incorrect = true;
    }
  }
})

export const { nextQuestion, nextSection, nextSublevel, nextLevel, gotIncorrect } = colorTheoryQuizSlice.actions;
export default colorTheoryQuizSlice.reducer;