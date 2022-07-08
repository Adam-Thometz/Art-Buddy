/** updateWinners
 * Purpose: takes an array of students (which are objects) and updates the winners based on who has the most points
 * Found in: scoreKeeperReducer.js
 */

function updateWinners(students) {
  const winners = [];
  let currWinningScore = 0;
  for (let student of students) {
    const { name, color, points } = student;
    if (points > currWinningScore) {
      winners.length = 0;
      winners.push({name, color});
      currWinningScore = points;
    } else if (points === currWinningScore) {
      winners.push({name, color});
    }
  }
  return winners;
}

export default updateWinners;