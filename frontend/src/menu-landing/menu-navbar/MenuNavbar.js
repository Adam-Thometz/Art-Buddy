import React from "react";
import { useNavigate } from "react-router-dom";

import './MenuNavbar.css'

const MenuNavbar = ({ page = null, setCategory }) => {
  const navigate = useNavigate()

  const handleChange = (label) => {
    setCategory(label);
  }

  const goHome = () => {
    navigate('/')
  }

  const mainPage = () => (
    <div className="MenuNavbar-main">
      <span onClick={() => handleChange('games')} className="MenuNavbar-button">GAMES</span>
      <span onClick={() => handleChange('tools')} className="MenuNavbar-button">TOOLS</span>
    </div>
  );

  const subPage = () => (
    <div className="MenuNavbar-games">
      <div className="MenuNavbar-back" onClick={goHome}>
        <p>BACK</p>
      </div>
      <span className="MenuNavbar-label">{page.toUpperCase()} GAMES</span>
    </div>
  )
  return page ? subPage() : mainPage();
}

export default MenuNavbar;