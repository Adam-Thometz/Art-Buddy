import allGoals from "data/goals/goals";

export default function filterBySubject(goals, category) {
  for (let goal of allGoals) {
    if (!goals.includes(goal.goal)) continue;
    if (goal.type === category) return true;
  }
  return false;
}