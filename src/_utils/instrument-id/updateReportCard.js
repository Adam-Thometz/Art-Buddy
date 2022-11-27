/* updateReportCard
  Purpose: update an array of correct answers on a report card, discarding any duplicates. Takes an array from a report card called group and a string (normally a correct answer) and returns an array that doesn't contain duplicates
  Found in: Choices.js
*/

export default function updateReportCard({ group, name }) {
  return [...new Set([...group, name])];
};