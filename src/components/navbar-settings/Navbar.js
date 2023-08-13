import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PopupContext } from "context/PopupContext";

import "./Navbar.css";

import TimeKeeperNav from "./time-keeper-nav/TimeKeeperNav";
import Settings from "../../views/settings/Settings";

import { SETTINGS_ICON } from "assets/settings/settings.assets";

const Navbar = () => {
  const { setCurrPopup } = useContext(PopupContext);
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const openSettings = () =>
    setCurrPopup({
      title: "SETTINGS",
      popup: <Settings />,
    });

  return (
    <nav className="Navbar">
      <span className="Navbar-header" onClick={goHome}>
        ARTBUDDY
      </span>
      <TimeKeeperNav />
      <img
        src={SETTINGS_ICON}
        alt="settings"
        className="Navbar-settings"
        onClick={openSettings}
      />
    </nav>
  );
};

export default Navbar;
