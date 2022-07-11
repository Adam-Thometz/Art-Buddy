import { createReducer } from "@reduxjs/toolkit";
import { addPoint, removePoint, clearGame, loadStudents } from "./scoreKeeperActions";

import sortWinners from "_helpers/score-keeper/sortWinners";

export const INITIAL_STATE = { students: [] }

const scoreKeeperReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(loadStudents, (state, action) => {
      const students = action.payload.map(student => ({
        name: student,
        points: 0
      }))
      state.students = students;
    })
    .addCase(addPoint, (state, action) => {
      const targetName = action.payload;
      const currStudents = state.students;
      const targetIdx = currStudents.findIndex(student => student.name === targetName);
      currStudents[targetIdx].points++;
      const updatedStudents = sortWinners(currStudents);
      state.students = updatedStudents;
    })
    .addCase(removePoint, (state, action) => {
      const targetName = action.payload;
      const currStudents = state.students;
      const targetIdx = currStudents.findIndex(student => student.name === targetName);
      if (!currStudents[targetIdx].points) return;
      currStudents[targetIdx].points--;
      const updatedStudents = sortWinners(currStudents);
      state.students = updatedStudents;
    })
    .addCase(clearGame, (state) => {
      state.students = [];
    });
});

export default scoreKeeperReducer;