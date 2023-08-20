import { useContext } from "react";
import { PopupContext } from "context/PopupContext";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import "./Menu.css";

import WindowNavbar from "components/window-nav/WindowNavbar";
import Button from "components/button/Button";
import GoalFilter from "views/goal-filter/GoalFilter";

import menuOptions from "./menuOptions";
import activities from "data/_activities/activityList";
import { goalIcons } from "assets/goal-filter/goalFilter.assets";
import getCoveredSubjects from "utils/goal-filter/getCoveredSubjects";

const Menu = ({ type = null }) => {
  const { menu } = useSelector((state) => state.general);
  const { setCurrPopup } = useContext(PopupContext)
  const navigate = useNavigate();

  const options = type
    ? type === "all"
      ? Object.values(activities).filter((a) => a.activityType === "games")
      : Object.values(activities).filter((a) => a.genre === type)
    : menuOptions[menu];

  const optionDisplay = options.map((option, i) => {
    const action = option.name === "COMMON CORE"
      ? () => setCurrPopup({ title: "Common Core Standards", popup: <GoalFilter /> })
      : () => navigate(option.url);
    return (
      <Button
        key={i}
        colorId={i % 4}
        onClick={action}
        icon={option.icon}
      >
        {option.name}
        {type ? <div className="Menu-subject-icons">
          {getCoveredSubjects(option.goalsCovered).map(subject => (
            <img src={goalIcons[subject]} alt="" />
          ))}
        </div> : null}
      </Button>
    );
  });

  return (
    <>
      <WindowNavbar page={type ? `${type.toUpperCase()} GAMES` : null} />
      <div className="Menu-options">{optionDisplay}</div>
    </>
  );
};

export default Menu;
