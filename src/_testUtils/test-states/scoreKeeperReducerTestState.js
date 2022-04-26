import { INITIAL_STATE } from "../../_redux/reducers/scoreKeeperReducer";

const addedStudents = {
  ...INITIAL_STATE,
  students: [
    {
      name: 'Jake',
      color: 'blue',
      points: 4
    },
    {
      name: 'Jane',
      color: 'red',
      points: 3
    },
  ]
}

export {
  addedStudents
}