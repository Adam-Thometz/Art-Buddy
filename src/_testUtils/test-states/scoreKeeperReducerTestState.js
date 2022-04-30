import { INITIAL_STATE, updateWinners } from "../../_redux/reducers/scoreKeeperReducer";

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
  ],
  winners: [{ name: 'Jake', color: 'blue' }]
}

export {
  addedStudents
}