import scoreKeeperReducer, { INITIAL_STATE } from "./scoreKeeperReducer";
import { clearGame, loadStudents, updatePoints } from "./scoreKeeperActions";
import { addedStudents } from "_testUtils/test-states/scoreKeeperReducerTestState";

describe("Score Keeper reducer", () => {
  it("should return the initial state", () => {
    expect(scoreKeeperReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should handle loading a roster", () => {
    const result = scoreKeeperReducer(
      undefined,
      loadStudents(["Jake", "Jane"])
    );
    expect(result).toEqual({
      ...INITIAL_STATE,
      students: [
        { name: "Jake", points: 0 },
        { name: "Jane", points: 0 },
      ],
    });
  });

  it("should handle adding a point", () => {
    const result = scoreKeeperReducer(
      addedStudents,
      updatePoints({ name: "Jane", instruction: "add" })
    );
    const testStudent = result.students.find(
      (student) => student.name === "Jane"
    );
    expect(testStudent.points).toEqual(4);
  });

  it("should handle removing a point", () => {
    const result = scoreKeeperReducer(
      addedStudents,
      updatePoints({ name: "Jake", instruction: "subtract" })
    );
    const testStudent = result.students.find(
      (student) => student.name === "Jake"
    );
    expect(testStudent.points).toEqual(3);
  });

  it("should not do anything if student points are 0 and the operation is remove", () => {
    const result = scoreKeeperReducer(
      addedStudents,
      updatePoints({ name: "Bob", instruction: "subtract" })
    );
    const testStudent = result.students.find(
      (student) => student.name === "Bob"
    );
    expect(testStudent.points).toEqual(0);
  });

  it("should handle clearing the game", () => {
    const result = scoreKeeperReducer(addedStudents, clearGame());
    expect(result).toEqual(INITIAL_STATE);
  });
});
