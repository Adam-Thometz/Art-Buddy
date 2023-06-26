import allGoals from "_data/goals/goals";

export default function getCoveredSubjects(goals) {
  const subjects = new Set();
  for (let goal of goals) {
    const subject = allGoals.find(g => g.goal === goal).type;
    subjects.add(subject);
  }
  return Array.from(subjects);
}