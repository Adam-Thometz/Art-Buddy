import React from "react";

import { useSelector, useDispatch } from "react-redux";

import './WindowNavbar.css';

import BackArrow from "../back-arrow/BackArrow";
import { changeMenuGames } from "../../_redux/actions";

const WindowNavbar = ({ page = null }) => {
  const dispatch = useDispatch();
  const menuCategory = useSelector(state => state.mainSettings.menu);
  const handleChange = (label) => {
    dispatch(changeMenuGames(label))
  }
  const underline = target => {
    return menuCategory === target ? ' underlined' : '';
  }

  const landingPage = () => (
    <div className="WindowNavbar-main">
      <span onClick={() => handleChange('games')} className={`WindowNavbar-button${underline('games')}`}>GAMES</span>
      <span onClick={() => handleChange('tools')} className={`WindowNavbar-button${underline('tools')}`}>TOOLS</span>
    </div>
  );

  const regularPage = () => (
    <div className="WindowNavbar-games">
      <BackArrow />
      <span className="WindowNavbar-label">{page}</span>
    </div>
  );

  return page ? regularPage() : landingPage();
}

export default WindowNavbar;