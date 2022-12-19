import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import './Menu.css';

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Button from "_components/button/Button";

import menuOptions from "./menuOptions";
import activities from "_data/_activities/activityList";

const Menu = ({ type = null }) => {
  const { menu } = useSelector(state => state.mainSettings);
  const navigate = useNavigate();

  const options = type ? (
    type === 'all'
      ? Object.values(activities).filter(a => a.activityType === 'games')
      : Object.values(activities).filter(a => a.genre === type)
  ) : menuOptions[menu];

  const optionDisplay = options.map((option, i) => (
    <Button
      key={i}
      colorId={i%4}
      onClick={() => navigate(option.url)}
      icon={option.icon}
      disabled={!option.active}
    >{option.name}</Button>
  ));

  return (<>
    <WindowNavbar page={type ? `${type.toUpperCase()} GAMES` : null} />
    <div className="Menu-options">
      {optionDisplay}
    </div>
  </>);
};

export default Menu;