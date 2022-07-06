import { createReducer } from "@reduxjs/toolkit";
import { addPoint, addStudent, removePoint, removeStudent, resetScores, toggleGameOver, clearGame, loadStudents } from "./scoreKeeperActions";

import updateWinners from "_helpers/score-keeper/updateWinners";

export const INITIAL_STATE = {
  students: [],
  winners: [],
  gameOver: false,
  error: null
}

const scoreKeeperReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(loadStudents, (state, action) => {
      const students = action.payload.map(student => ({
        name: student,
        color: '#000000',
        points: 0
      }))
      state.students = students;
    })
    .addCase(addStudent, (state, action) => {
      const { name, color } = action.payload;
      const duplicateStudent = state.students.find(student => student.name === name);
      if (duplicateStudent) {
        state.error = 'Student already in play!';
      } else {
        const newStudent = { name, color, points: 0 };
        state.students.push(newStudent);
        state.error = null;
      }
    })
    .addCase(removeStudent, (state, action) => {
      const targetName = action.payload;
      state.students = [ ...state.students.filter(student => student.name !== targetName) ];
      state.winners = updateWinners(state.students);
    })
    .addCase(addPoint, (state, action) => {
      const targetName = action.payload;
      const targetIdx = state.students.findIndex(student => student.name === targetName);
      state.students[targetIdx].points++;
      state.winners = updateWinners(state.students);
    })
    .addCase(removePoint, (state, action) => {
      const targetName = action.payload;
      const targetIdx = state.students.findIndex(student => student.name === targetName);
      if (!state.students[targetIdx].points) return;
      state.students[targetIdx].points--;
      state.winners = updateWinners(state.students);
    })
    .addCase(toggleGameOver, (state) => {
      state.gameOver = !state.gameOver;
    })
    .addCase(resetScores, (state) => {
      state.students = [...state.students.map(student => ({
        name: student.name,
        color: student.color,
        points: 0
      }))];
      state.winners = [];
    })
    .addCase(clearGame, (state) => {
      state.students = [];
      state.winners = [];
      state.gameOver = false;
      state.error = null;
    });
})

export default scoreKeeperReducer;