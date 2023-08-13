import { INITIAL_STATE } from "store/score-keeper/scoreKeeperReducer";

const addedStudents = {
  ...INITIAL_STATE,
  students: [
    {
      name: "Jake",
      points: 4,
    },
    {
      name: "Jane",
      points: 3,
    },
    {
      name: "Bob",
      points: 0,
    },
  ],
};

export { addedStudents };
