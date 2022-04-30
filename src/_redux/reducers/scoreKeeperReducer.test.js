import scoreKeeperReducer, { INITIAL_STATE, updateWinners } from './scoreKeeperReducer';
import { scoreKeeperActions } from '../actions/actionTypes';
import { addedStudents } from '../../_testUtils/test-states/scoreKeeperReducerTestState'

beforeEach(() => {
  scoreKeeperReducer(addedStudents, {});
});

afterEach(() => {
  scoreKeeperReducer(undefined, {});
});

describe('updateWinners', () => {
  it('should determine winners', () => {
    const result = updateWinners(addedStudents.students);
    expect(result.length).toBe(1);
    expect(result).toEqual([{name:'Jake', color: 'blue'}])
  });
});

describe('Score Keeper reducer', () => {
  it('should return the initial state', () => {
    expect(scoreKeeperReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle adding a student', () => {
    const addAction = {
      type: scoreKeeperActions.ADD_STUDENT,
      name: 'Jake',
      color: 'blue'
    };
    expect(scoreKeeperReducer(undefined, addAction)).toEqual({
      ...INITIAL_STATE,
      students: [{
        name: 'Jake',
        color: 'blue',
        points: 0
      }]
    });
  });

  it('should throw an error if adding a duplicate student', () => {
    const addAction = {
      type: scoreKeeperActions.ADD_STUDENT,
      name: 'Jake',
      color: 'blue'
    };
    expect(scoreKeeperReducer(addedStudents, addAction)).toEqual({
      ...addedStudents,
      error: 'Student already in play!'
    });
  });

  it('should handle removing a student', () => {
    const removeAction = {
      type: scoreKeeperActions.REMOVE_STUDENT,
      name: 'Jane'
    }
    expect(scoreKeeperReducer(addedStudents, removeAction)).toEqual({
      ...addedStudents,
      students: [{
        name: 'Jake',
        color: 'blue',
        points: 4
      }]
    })
  });

  it('should handle adding a point', () => {
    const addPointAction = {
      type: scoreKeeperActions.ADD_POINT,
      name: 'Jane'
    };
    const result = scoreKeeperReducer(addedStudents, addPointAction)
    const testStudent = result.students.find(student => student.name === addPointAction.name);
    expect(testStudent.points).toEqual(4);
  });
  
  it('should handle removing a point', () => {
    const removePointAction = {
      type: scoreKeeperActions.REMOVE_POINT,
      name: 'Jake'
    };
    const result = scoreKeeperReducer(addedStudents, removePointAction)
    const testStudent = result.students.find(student => student.name === removePointAction.name);
    expect(testStudent.points).toEqual(3);
  });

  it('should handle toggling game over', () => {
    const toggleGameOverAction = {
      type: scoreKeeperActions.GAME_OVER,
      gameOver: true
    }
    const result = scoreKeeperReducer(addedStudents, toggleGameOverAction);
    expect(result.gameOver).toBe(true);
    expect(result.winners).toContainEqual({name:'Jake', color: 'blue'});
  });

  it('should handle resetting scores', () => {
    const resetScoresAction = {
      type: scoreKeeperActions.RESET_SCORES
    }
    const result = scoreKeeperReducer(addedStudents, resetScoresAction);
    const hasReset = result.students.every(student => student.points === 0)
    expect(hasReset).toBe(true);
  })
});