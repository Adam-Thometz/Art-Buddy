/** checkHasPassed
 * checks a report card to see if it has a perfect score. Used to unlock new levels and other things.
 */

export default function checkHasPassed(reportCard, levels = []) {
  const reportCardKeys = levels.length
    ? Object.keys(reportCard).filter((level) => levels.includes(level))
    : Object.keys(reportCard);
  return reportCardKeys.every(
    (score) => reportCard[score].results.length >= reportCard[score].maxScore
  );
}
