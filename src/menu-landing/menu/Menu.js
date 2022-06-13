import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import './Menu.css';

import WindowNavbar from "../../_components/window-nav/WindowNavbar";
import Button from "../../_components/button/Button";

import menuOptions from "./menuOptions";
import activities from "./activityList";

const Menu = ({ type = null }) => {
  const menu = useSelector(state => state.mainSettings.menu);
  const navigate = useNavigate();

  const getGames = (category) => (
    category === 'all' ?
      activities.filter(a => a.activityType === 'games') :
      activities.filter(a => a.genre === category)
  );

  const options = !type ? menuOptions[menu] : getGames(type);

  const optionDisplay = options.map((option, i) => (
    <Button
      key={i}
      colorId={i%4}
      onClick={() => navigate(option.url)}
      icon={option.icon}
    >{option.name}</Button>
  ));

  return (
    <main className="Menu">
      <WindowNavbar page={type ? `${type.toUpperCase()} GAMES` : null} />
      <div className="Menu-options">
        {optionDisplay}
      </div>
    </main>
  );
};

export default Menu;