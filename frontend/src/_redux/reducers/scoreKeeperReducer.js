import { scoreKeeperActions } from "../actions/actionTypes";

const INITIAL_STATE = {
  students: [],
  maxScore: 5
}

const {
  ADD_STUDENT,
  REMOVE_STUDENT,
  ADD_POINT,
  REMOVE_POINT,
  CHANGE_MAX_SCORE,
  RESET_SCORES
} = scoreKeeperActions;

export default function scoreKeeperReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_STUDENT:
      const studentsWithNewStudent = [ ...state.students ];
      const { name, color } = action
      const newStudent = {
        name,
        color,
        points: 0
      };
      studentsWithNewStudent.push(newStudent);
      return { ...state, students: studentsWithNewStudent };

    case REMOVE_STUDENT:
      const studentsMinusOneStudent = [ ...state.students ];
      studentsMinusOneStudent.filter(student => student.name !== action.name);
      return { ...state, students: studentsMinusOneStudent };

    case ADD_POINT:
      const studentsWithAddedPoint = [ ...state.students ];
      const studentToAddIdx = state.students.findIndex(student => student.name === action.name);
      studentsWithAddedPoint[studentToAddIdx].points++;
      return { ...state, students: studentsWithAddedPoint };

    case REMOVE_POINT:
      const studentsWithSubtractedPoint = [ ...state.students ];
      const studentToSubtractIdx = state.students.findIndex(student => student.name === action.name);
      studentsWithSubtractedPoint[studentToSubtractIdx].points--;
      return { ...state, students: studentsWithSubtractedPoint };

    case CHANGE_MAX_SCORE:
      return { ...state, maxScore: action.maxScore };
    
    case RESET_SCORES:
      const resetScores = state.students.map(s => ({
        name: s.name,
        points: 0,
        color: s.color
      }));
      return { ...state, students: resetScores };
      
    default:
      return state;
  };
};