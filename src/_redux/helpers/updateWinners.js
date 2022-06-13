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