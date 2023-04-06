import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PopupContext } from "_context/PopupContext";

import { useSelector } from "react-redux";

import "./Navbar.css";

import TimeKeeperNav from "./time-keeper-nav/TimeKeeperNav";
import Settings from "./settings/Settings";

import settingsIcon from "_media/settings/settings.png";

const Navbar = () => {
  const { setCurrPopup } = useContext(PopupContext);
  const { song } = useSelector(state => state.timeKeeper)
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
      {song.length ? <TimeKeeperNav /> : null}
      <img
        src={settingsIcon}
        alt="settings"
        className="Navbar-settings"
        onClick={openSettings}
      />
    </nav>
  );
};

export default Navbar;
