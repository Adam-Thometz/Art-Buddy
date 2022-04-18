import React from "react";

import './MenuNavbar.css'

const MenuNavbar = ({ page = null, setCategory }) => {
  const handleChange = (label) => {
    setCategory(label);
  }

  const mainPage = () => (
    <div className="MenuNavbar">
      <span onClick={() => handleChange('games')} className="MenuNavbar-button">GAMES</span>
      <span onClick={() => handleChange('tools')} className="MenuNavbar-button">TOOLS</span>
    </div>
  );

  const subPage = () => (
    <div className="MenuNavbar">
      {/* <img src={ Back button image goes here! }/> */}
      <span className="MenuNavbar-lebel">{page.toUpperCase()} GAMES</span>
    </div>
  )
  return page ? subPage() : mainPage();
}

export default MenuNavbar;