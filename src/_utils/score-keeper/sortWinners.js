export default function sortWinners(students) {
  return students.sort((a,b) => b.points - a.points);
};