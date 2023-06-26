import allGoals from "_data/goals/goals";

export default function filterBySubject(goals, category) {
  for (let goal of allGoals) {
    if (!goals.includes(goal.goal)) {
      continue;
    } else if (goal.type === category) {
      return true;
    }
  }
  return false;
}