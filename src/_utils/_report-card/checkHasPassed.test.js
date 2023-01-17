import checkHasPassed from "./checkHasPassed";
import { instrumentIdReportCard } from "_data/_report-cards/initialReportCards";

describe("checkHasPassed function", () => {
  it("should return false if a report card does not have all passing scores", () => {
    const result = checkHasPassed(instrumentIdReportCard);
    expect(result).toBe(false);
  });

  it("should return true if a report card has all passing scores", () => {
    const passingReportCard = { ...instrumentIdReportCard };
    for (let family in passingReportCard) {
      const { maxScore } = passingReportCard[family];
      passingReportCard[family].results = Array(maxScore);
    }
    const result = checkHasPassed(passingReportCard);
    expect(result).toBe(true);
  });
});
