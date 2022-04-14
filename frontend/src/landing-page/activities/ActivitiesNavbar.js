import React from "react";

import './ActivitiesNavbar.css'

const ActivitiesNavbar = ({ setCategory }) => {
  const handleChange = (label) => {
    setCategory(label);
  }
  return (
    <div className="ActivitiesNavbar">
      <span onClick={() => handleChange('games')} className="ActivitiesNavbar-label">GAMES</span>
      <span onClick={() => handleChange('tools')} className="ActivitiesNavbar-label">TOOLS</span>
    </div>
  )
}

export default ActivitiesNavbar;