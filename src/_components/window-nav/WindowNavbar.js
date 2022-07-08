import React from "react";
import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { changeMenuGames } from "_redux/settings/mainSettingsActions";

import './WindowNavbar.css';

import BackArrow from "./back-arrow/BackArrow";

const WindowNavbar = ({ cornerIcon = null, page = null }) => {
  const { menu } = useSelector(state => state.mainSettings);

  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = e => dispatch(changeMenuGames(e.target.id));
  const underline = target => menu === target ? ' underlined' : '';

  const menuPage = (
    <header className="WindowNavbar-main">
      <span onClick={handleChange} id="games" className={`WindowNavbar-button${underline('games')}`}>GAMES</span>
      <span onClick={handleChange} id="tools" className={`WindowNavbar-button${underline('tools')}`}>TOOLS</span>
    </header>
  );

  const regularPage = (
    <header className="WindowNavbar-games">
      {location.pathname.length === 1 ? null : <BackArrow />}
      <h1 className="WindowNavbar-label">{page}</h1>
      {cornerIcon ? <div className="WindowNavbar-corner">{cornerIcon}</div> : null}
    </header>
  );

  return page ? regularPage : menuPage;
};

export default WindowNavbar;