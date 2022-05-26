import React from "react";
import { useNavigate } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="Navbar">
      <span className="Navbar-header" onClick={() => navigate('/')}>ARTBUDDY</span>
    </nav>
  );
};

export default Navbar;