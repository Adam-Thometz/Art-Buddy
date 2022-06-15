import React from "react";
import { useNavigate } from "react-router-dom";

import './Navbar.css';

import Popup from '../_components/popup/Popup';
import Settings from "./settings/Settings";

import settingsIcon from './settings/_icons/settings.png';

const Navbar = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');
  return (
    <nav className="Navbar">
      <span className="Navbar-header" onClick={goHome}>ARTBUDDY</span>
      <Popup
        title='SETTINGS'
        trigger={<img src={settingsIcon} alt='settings' />}
        triggerClass='Navbar-settings'
        popup={<Settings />}
      />
    </nav>
  );
};

export default Navbar;