import { scoreKeeperActions } from "../actions/actionTypes";

const INITIAL_STATE = {
  students: [],
  isPlaying: false
}

const {
  ADD_STUDENT,
  REMOVE_STUDENT,
  ADD_POINT,
  REMOVE_POINT
} = scoreKeeperActions;

export default function scoreKeeperReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_STUDENT:
      const studentsWithNewStudent = [ ...state.students ];
      const newStudent = {
        name: action.name,
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
      
    default:
      return state;
  };
};