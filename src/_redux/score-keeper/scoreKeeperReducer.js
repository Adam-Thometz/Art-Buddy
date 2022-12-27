import { createReducer } from "@reduxjs/toolkit";
import { loadStudents, updatePoints, clearGame } from "./scoreKeeperActions";

import sortWinners from "_utils/score-keeper/sortWinners";
import operations from "_data/score-keeper/operations";

export const INITIAL_STATE = {
  students: []
};

const scoreKeeperReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(loadStudents, (state, action) => {
      const students = action.payload.map(student => ({
        name: student,
        points: 0
      }))
      state.students = students;
    })
    .addCase(updatePoints, (state, action) => {
      const { name, instruction } = action.payload;
      const operation = operations[instruction];
      const currStudents = state.students;
      const targetIdx = currStudents.findIndex(student => student.name === name);
      const points = currStudents[targetIdx].points;
      if (operation(points) < 0) return;
      currStudents[targetIdx].points = operation(points);
      const updatedStudents = sortWinners(currStudents);
      state.students = updatedStudents;
    })
    .addCase(clearGame, (state) => {
      state.students = INITIAL_STATE.students;
    });
});

export default scoreKeeperReducer;