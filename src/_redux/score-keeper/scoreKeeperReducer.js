import { createSlice } from "@reduxjs/toolkit";
import sortWinners from "_utils/score-keeper/sortWinners";
import operations from "_data/score-keeper/operations";

export const initialState = {
  students: [],
};

const scoreKeeperSlice = createSlice({
  name: "scoreKeeper",
  initialState,
  reducers: {
    loadStudents(state, action) {
      const students = action.payload.map((student) => ({
        name: student,
        points: 0,
      }));
      state.students = students;
    },
    updatePoints(state, action) {
      const { name, instruction } = action.payload;
      const operation = operations[instruction];
      const currStudents = state.students;
      const targetIdx = currStudents.findIndex(student => student.name === name);
      const points = currStudents[targetIdx].points;
      const result = operation(points);
      currStudents[targetIdx].points = result < 0 ? 0 : result;
      const updatedStudents = sortWinners(currStudents);
      state.students = updatedStudents;
    },
    clearGame(state) {
      state.students = initialState.students;
    }
  }
});

const { loadStudents, updatePoints, clearGame } = scoreKeeperSlice.actions;
export { loadStudents, updatePoints, clearGame };
export default scoreKeeperSlice.reducer;
