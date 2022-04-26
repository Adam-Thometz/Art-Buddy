import React from "react";
import { useNavigate } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="Navbar">
      <span className="Navbar-header" onClick={() => navigate('/')}>ARTBUDDY</span>
    </div>
  );
};

export default Navbar;