import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Menu.css';

import MenuNavbar from "../menu-navbar/MenuNavbar";
import Button from "../../_components/button/Button";

import menuOptions from "./menuOptions";
import activities from "./activityList";

const Menu = ({ type = null }) => {
  const [category, setCategory] = useState('games');
  const navigate = useNavigate();

  const getGames = (category) => (
    category === 'all' ?
      activities.filter(a => a.activityType === 'games') :
      activities.filter(a => a.genre === category)
  );

  const createNav = () => (
    !type ? <MenuNavbar setCategory={setCategory} /> : <MenuNavbar page={type} />
  )

  const options = !type ? menuOptions[category] : getGames(type);
  return (
    <div className="Menu">
      {createNav()}
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