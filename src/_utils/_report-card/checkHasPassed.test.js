import checkHasPassed from "./checkHasPassed";
import { instrumentIdReportCard } from "_data/_report-cards/initialReportCards";

describe("checkHasPassed function", () => {
  const passingReportCard = JSON.parse(JSON.stringify(instrumentIdReportCard));
  for (let family in passingReportCard) {
    const { maxScore } = passingReportCard[family];
    passingReportCard[family].results = Array(maxScore);
  }
  it("should return false if a report card does not have all passing scores", () => {
    const result = checkHasPassed(instrumentIdReportCard);
    expect(result).toBe(false);
  });

  it("should return true if a report card has all passing scores", () => {
    const result = checkHasPassed(passingReportCard);
    expect(result).toBe(true);
  });

  it("should return true if report card's selected sections passes", () => {
    const result = checkHasPassed(passingReportCard, ["brass", "electronic"]);
    expect(result).toBe(true);
  });

  it("should return false if one of a report card's selected sections fails", () => {
    passingReportCard.brass.results = [];
    const result = checkHasPassed(passingReportCard, ["brass", "electronic"]);
    expect(result).toBe(false);
  });
});
