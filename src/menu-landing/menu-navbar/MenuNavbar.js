import React from "react";
import BackArrow from "../../_components/back-arrow/BackArrow";

import './MenuNavbar.css';

const MenuNavbar = ({ page = null, category, setCategory }) => {
  const handleChange = (label) => {
    setCategory(label);
  }
  const underline = target => {
    return category === target ? ' underlined' : '';
  }

  const mainPage = () => (
    <div className="MenuNavbar-main">
      <span onClick={() => handleChange('games')} className={`MenuNavbar-button${underline('games')}`}>GAMES</span>
      <span onClick={() => handleChange('tools')} className={`MenuNavbar-button${underline('tools')}`}>TOOLS</span>
    </div>
  );

  const gamePage = () => (
    <div className="MenuNavbar-games">
      <BackArrow />
      <span className="MenuNavbar-label">{page.toUpperCase()} GAMES</span>
    </div>
  );

  return page ? gamePage() : mainPage();
}

export default MenuNavbar;