import React from "react";
import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { changeMenu } from "_redux/_general/generalActions";

import './WindowNavbar.css';

import BackArrow from "./back-arrow/BackArrow";
import Help from "_components/help/Help";

const WindowNavbar = ({ cornerIcon = null, page = null }) => {
  const { menu } = useSelector(state => state.general);

  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = e => dispatch(changeMenu(e.target.id));
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
      {location.pathname.length === 1 ? null : <Help />}
    </header>
  );

  return page ? regularPage : menuPage;
};

export default WindowNavbar;