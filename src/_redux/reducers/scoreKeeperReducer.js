import { scoreKeeperActions } from "../actions/actionTypes";

export const INITIAL_STATE = {
  students: [],
  winners: [],
  gameOver: false,
  error: null
}

const {
  ADD_STUDENT,
  REMOVE_STUDENT,
  ADD_POINT,
  REMOVE_POINT,
  GAME_OVER,
  RESET_SCORES
} = scoreKeeperActions;

export default function scoreKeeperReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_STUDENT:
      const { name, color } = action;
      const duplicateStudent = state.students.find(student => student.name === name);
      if (duplicateStudent) return { ...state, error: 'Student already in play!'};

      const studentsWithNewStudent = [ ...state.students ];
      const newStudent = {
        name,
        color,
        points: 0
      };
      studentsWithNewStudent.push(newStudent);
      return {
        ...state,
        students: studentsWithNewStudent,
        error: null
      };

    case REMOVE_STUDENT:
      const studentsMinusOneStudent = state.students.filter(
        student => student.name !== action.name
      );
      return {
        ...state,
        students: studentsMinusOneStudent,
        winners: updateWinners(studentsMinusOneStudent),
        error: null
      };

    case ADD_POINT:
      const studentsWithAddedPoint = [ ...state.students ];
      const studentToAddIdx = state.students.findIndex(student => student.name === action.name);
      studentsWithAddedPoint[studentToAddIdx].points++;
      return {
        ...state,
        students: studentsWithAddedPoint,
        winners: updateWinners(studentsWithAddedPoint),
        error: null
      };
      
    case REMOVE_POINT:
      const studentsWithSubtractedPoint = [ ...state.students ];
      const studentToSubtractIdx = state.students.findIndex(student => student.name === action.name);
      studentsWithSubtractedPoint[studentToSubtractIdx].points--;
      return {
        ...state,
        students: studentsWithSubtractedPoint,
        winners: updateWinners(studentsWithSubtractedPoint),
        error: null
      };
    
    case GAME_OVER:
      return { ...state, gameOver: action.gameOver };
    
    case RESET_SCORES:
      const resetScores = state.students.map(s => ({
        name: s.name,
        points: 0,
        color: s.color
      }));
      return {
        ...state,
        students: resetScores,
        winners: [],
        error: null
      };
      
    default:
      return state;
  };
};

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