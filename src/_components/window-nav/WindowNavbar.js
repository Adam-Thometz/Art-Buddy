import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeMenuGames } from "../../_redux/actions/mainSettingsActions";

import './WindowNavbar.css';

import BackArrow from "../back-arrow/BackArrow";

const WindowNavbar = ({ cornerIcon = null, page = null }) => {
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
      {page === 'WELCOME TO ART BUDDY!' ? null : <BackArrow />}
      <h1 className="WindowNavbar-label">{page}</h1>
      {cornerIcon}
    </div>
  );

  return page ? regularPage() : landingPage();
}

export default WindowNavbar;