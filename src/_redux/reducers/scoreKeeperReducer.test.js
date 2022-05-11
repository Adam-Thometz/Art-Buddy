import scoreKeeperReducer, { INITIAL_STATE } from './scoreKeeperReducer';
import { addStudent, removeStudent, addPoint, removePoint, toggleGameOver, resetScores, clearGame } from '../actions/scoreKeeperActions';
import { addedStudents } from '../../_testUtils/test-states/scoreKeeperReducerTestState'

describe('Score Keeper reducer', () => {
  it('should return the initial state', () => {
    expect(scoreKeeperReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle adding a student', () => {
    expect(scoreKeeperReducer(undefined, addStudent({name: 'Jake', color: 'blue'}))).toEqual({
      ...INITIAL_STATE,
      students: [{
        name: 'Jake',
        color: 'blue',
        points: 0
      }]
    });
  });

  it('should throw an error if adding a duplicate student', () => {
    expect(scoreKeeperReducer(addedStudents, addStudent({name: 'Jake', color: 'blue'}))).toEqual({
      ...addedStudents,
      error: 'Student already in play!'
    });
  });

  it('should handle removing a student', () => {
    expect(scoreKeeperReducer(addedStudents, removeStudent('Jane'))).toEqual({
      ...addedStudents,
      students: [{
        name: 'Jake',
        color: 'blue',
        points: 4
      }]
    });
  });

  it('should handle adding a point', () => {
    const result = scoreKeeperReducer(addedStudents, addPoint('Jane'));
    const testStudent = result.students.find(student => student.name === 'Jane');
    expect(testStudent.points).toEqual(4);
  });
  
  it('should handle removing a point', () => {
    const result = scoreKeeperReducer(addedStudents, removePoint('Jake'));
    const testStudent = result.students.find(student => student.name === 'Jake');
    expect(testStudent.points).toEqual(3);
  });

  it('should handle toggling game over', () => {
    const result = scoreKeeperReducer(addedStudents, toggleGameOver());
    expect(result.gameOver).toBe(true);
    expect(result.winners).toContainEqual({name:'Jake', color: 'blue'});
    const result2 = scoreKeeperReducer(result, toggleGameOver());
    expect(result2.gameOver).toBe(false);
  });

  it('should handle resetting scores', () => {
    const result = scoreKeeperReducer(addedStudents, resetScores());
    const hasReset = result.students.every(student => student.points === 0);
    expect(hasReset).toBe(true);
  });

  it('should handle resetting the game', () => {
    const result = scoreKeeperReducer(addedStudents, clearGame());
    expect(result).toEqual(INITIAL_STATE);
  });
});