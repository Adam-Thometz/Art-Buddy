import { useContext } from "react";
import { PopupContext } from "_context/PopupContext";

import "./GoalFilter.css";

import GoalCategory from "./category/GoalCategory";

import { goalIcons } from "_media/goal-filter/goalFilter.assets";

const GoalFilter = () => {
  const { setCurrPopup } = useContext(PopupContext);

  const capitalize = word => word[0].toUpperCase() + word.slice(1);

  const showFilteredGames = e => {
    const { id: category } = e.currentTarget;
    const title = <span>
      <img className="GoalFilter-icon" src={goalIcons[category]} alt="" />
      <span>{capitalize(category)} Standards</span>
    </span>
    setCurrPopup({
      title,
      popup: <GoalCategory category={category} />
    });
  }
  return (
    <div className="GoalFilter">
      <p className="GoalFilter-description">
        Art Buddy was designed to seamlessly integrate the Common Core Standards!
        Look for the icon(s) on each game!
      </p>
      <ul className="GoalFilter-list">
        {Object.keys(goalIcons).map(goal => (
          <li key={goal} id={goal} className="GoalFilter-list-item" onClick={showFilteredGames}>
            <img className="GoalFilter-icon" src={goalIcons[goal]} alt="" />
            <span>{capitalize(goal)} Standards</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalFilter;
