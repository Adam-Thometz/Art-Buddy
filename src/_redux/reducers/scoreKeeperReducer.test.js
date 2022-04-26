import scoreKeeperReducer, {INITIAL_STATE} from './scoreKeeperReducer';
import { scoreKeeperActions } from '../actions/actionTypes';
import { addedStudents } from '../../_testUtils/test-states/scoreKeeperReducerTestState'

describe('Score Keeper reducer', () => {
  it('should return the initial state', () => {
    expect(scoreKeeperReducer(undefined, {})).toEqual(INITIAL_STATE);
  })

  it('should handle adding a student', () => {
    const addAction = {
      type: scoreKeeperActions.ADD_STUDENT,
      name: 'Jake',
      color: 'blue'
    }
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
    }
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
  })
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
  it('should handle changing the max score', () => {
    const changeMaxScoreAction = {
      type: scoreKeeperActions.CHANGE_MAX_SCORE,
      maxScore: 10
    };
    expect(scoreKeeperReducer(undefined, changeMaxScoreAction)).toEqual({
      ...INITIAL_STATE,
      maxScore: 10
    });
  })
  it('should handle resetting scores', () => {
    const resetScoresAction = {
      type: scoreKeeperActions.RESET_SCORES
    }
    const result = scoreKeeperReducer(addedStudents, resetScoresAction);
    const hasReset = result.students.every(student => student.points === 0)
    expect(hasReset).toBe(true);
  })
})