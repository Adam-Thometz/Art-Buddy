import checkHasPassed from "./checkHasPassed";
import { instrumentIdReportCard } from '_data/_report-cards/initialReportCards'

describe('checkHasPassed function', () => {
  it('should return false if a report card does not have all passing scores', () => {
    const result = checkHasPassed(instrumentIdReportCard);
    expect(result).toBe(false);
  });
});