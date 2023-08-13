import { useContext } from "react";
import { PopupContext } from "context/PopupContext";
import { useNavigate } from "react-router-dom";

import "./GoalCategory.css";

import GoalFilter from "views/goal-filter/GoalFilter";
import Button from "components/button/Button";

import activities from "data/_activities/activityList";
import filterBySubject from "lib/goal-filter/filter";

const GoalCategory = ({ category }) => {
  const { setCurrPopup } = useContext(PopupContext);
  const navigate = useNavigate()
  const filtered = Object.keys(activities).filter(activity => {
    const goals = activities[activity].goalsCovered;
    const result = filterBySubject(goals, category);
    return result;
  });

  const goToGame = e => {
    const { id: game } = e.target;
    navigate(activities[game].url);
  }

  const goBack = () => setCurrPopup({
    title: "Common Core Standards",
    popup: <GoalFilter />
  })
  return (
    <div className="GoalCategory">
      <span onClick={goBack}>go back</span>
      {filtered.length ? filtered.map((game, i) => (
        <Button
          key={i}
          colorId={i % 4}
          id={game}
          onClick={goToGame}
          icon={activities[game].icon}
        >
          {activities[game].name}
        </Button>
      )) : <p>Nothing for this yet!</p>}
    </div>
  )
}

export default GoalCategory;
