import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../_components/button/Button";
import MenuNavbar from "../menu-navbar/MenuNavbar";

import menuOptions from "./menuOptions";
import colors from "../../_components/button/colorOrder";

const Menu = () => {
  const [category, setCategory] = useState('games')
  const navigate = useNavigate();

  const options = menuOptions[category];
  return (
    <div className="Menu">
      <MenuNavbar setCategory={setCategory} />
      {options.map((option, i) => (
        <Button outlineColor={colors[i%4]} onClick={() => navigate(option.url)}>{option.name}</Button>
      ))}
    </div>
  );
};

export default Menu;