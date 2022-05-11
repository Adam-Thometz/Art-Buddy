function updateWinners(students) {
  const winners = [];
  let currWinningScore = 0;
  for (let student of students) {
    if (student.points > currWinningScore) {
      winners.length = 0;
      const { name, color } = student;
      winners.push({name, color});
      currWinningScore = student.points;
    } else if (student.points === currWinningScore) {
      const { name, color } = student;
      winners.push({name, color});
    }
  }
  return winners;
}

export default updateWinners;