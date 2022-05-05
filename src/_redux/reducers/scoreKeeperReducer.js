import { createReducer } from "@reduxjs/toolkit";
import { addPoint, addStudent, removePoint, removeStudent, resetScores, toggleGameOver } from "../actions/scoreKeeperActions";

export const INITIAL_STATE = {
  students: [],
  winners: [],
  gameOver: false,
  error: null
}

const scoreKeeperReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
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
      state.winners = updateWinners(state.students);
    })
})

export default scoreKeeperReducer;

export function updateWinners(students) {
  const winners = [];
  let currWinningScore = 0;
  for (let student of students) {
    if (student.points > currWinningScore) {
      winners.length = 0;
      const { name, color } = student;
      winners.push({name, color});
      currWinningScore = student.points;
    } else if (student.points === currWinningScore) {
      const { name, color } = student;
      winners.push({name, color});
    }
  }
  return winners;
}