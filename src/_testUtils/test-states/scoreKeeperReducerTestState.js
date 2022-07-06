import { INITIAL_STATE } from "_redux/score-keeper/scoreKeeperReducer";

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
    {
      name: 'Bob',
      color: 'green',
      points: 0
    },
  ],
  winners: [{ name: 'Jake', color: 'blue' }]
};

export { addedStudents };