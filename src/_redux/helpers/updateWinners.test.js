import updateWinners from './updateWinners';
import { addedStudents } from '../../_testUtils/test-states/scoreKeeperReducerTestState'

describe('updateWinners', () => {
  it('should determine winners', () => {
    const result = updateWinners(addedStudents.students);
    expect(result.length).toBe(1);
    expect(result).toEqual([{name:'Jake', color: 'blue'}])
  });
});