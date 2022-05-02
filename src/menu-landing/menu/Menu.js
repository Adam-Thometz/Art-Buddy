import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import './Menu.css';

import Button from "../../_components/button/Button";

import menuOptions from "./menuOptions";
import activities from "./activityList";

const Menu = ({ type = null }) => {
  const menu = useSelector(state => state.mainSettings.menu)
  const navigate = useNavigate();
  const getGames = (category) => (
    category === 'all' ?
      activities.filter(a => a.activityType === 'games') :
      activities.filter(a => a.genre === category)
  );
  const options = !type ? menuOptions[menu] : getGames(type);
  return (
    <div className="Menu">
      <div className="Menu-options">
        {options.map((option, i) => (
          <Button
            colorId={i%4}
            onClick={() => navigate(option.url)}
            icon={option.icon}
          >{option.name}</Button>
        ))}
      </div>
    </div>
  );
};

export default Menu;