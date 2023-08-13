/* updateReportCard
  Purpose: update an array of correct answers on a report card, discarding any duplicates. Takes an array from a report card called group and a string (normally a correct answer) and returns an array that doesn't contain duplicates
  Found in: Choice.js
*/

export default function updateReportCard({ group, name }) {
  const update = new Set([...group]);
  Array.isArray(name) ? name.forEach((n) => update.add(n)) : update.add(name);
  return [...update];
}
