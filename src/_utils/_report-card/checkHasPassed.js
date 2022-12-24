export default function checkHasPassed(reportCard) {
  return Object.keys(reportCard).every(score => (
    reportCard[score].results.length === reportCard[score].maxScore
  )); 
};