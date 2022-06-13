import React from "react";
import { useNavigate } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');
  return (
    <nav className="Navbar">
      <span className="Navbar-header" onClick={goHome}>ARTBUDDY</span>
    </nav>
  );
};

export default Navbar;