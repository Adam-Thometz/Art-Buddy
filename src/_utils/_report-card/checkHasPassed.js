/** checkHasPassed
 * checks a report card to see if it has a perfect score. Used to unlock new levels and other things.
 */

export default function checkHasPassed(reportCard) {
  return Object.keys(reportCard).every(score => (
    reportCard[score].results.length >= reportCard[score].maxScore
  ));
};