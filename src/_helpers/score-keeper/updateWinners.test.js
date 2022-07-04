import updateWinners from './updateWinners';
import { addedStudents } from '../../_testUtils/test-states/scoreKeeperReducerTestState'

describe('updateWinners', () => {
  it('should determine winners if one winner', () => {
    const result = updateWinners(addedStudents.students);
    expect(result.length).toBe(1);
    expect(result).toEqual([{ name:'Jake', color: 'blue' }]);
  });
  
  it('should determine winners if more than one winner', () => {
    addedStudents.students[1].points++;
    const result = updateWinners(addedStudents.students);
    expect(result.length).toBe(2);
    expect(result).toEqual([{ name: 'Jake', color: 'blue' }, { name: 'Jane', color: 'red' }]);
  })
});