import React from "react";
import BackArrow from "../../_components/back-arrow/BackArrow";

import './MenuNavbar.css';

const MenuNavbar = ({ page = null, setCategory }) => {
  const handleChange = (label) => {
    setCategory(label);
  }

  const mainPage = () => (
    <div className="MenuNavbar-main">
      <span onClick={() => handleChange('games')} className="MenuNavbar-button">GAMES</span>
      <span onClick={() => handleChange('tools')} className="MenuNavbar-button">TOOLS</span>
    </div>
  );

  const subPage = () => (
    <div className="MenuNavbar-games">
      <BackArrow />
      <span className="MenuNavbar-label">{page.toUpperCase()} GAMES</span>
    </div>
  );

  return page ? subPage() : mainPage();
}

export default MenuNavbar;