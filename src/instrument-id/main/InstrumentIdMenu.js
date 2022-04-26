import React from "react";

import { useDispatch } from "react-redux";
import { changeMode } from "../../_redux/actions/actions";

import './InstrumentIdMenu.css';

import Clickable from "../../_components/clickable-icon/Clickable";

import { playIcon, learnIcon } from "../_icons/iconImports";

const InstrumentIdMenu = () => {
  const dispatch = useDispatch();

  const handleChangeMode = mode => {
    dispatch(changeMode(mode));
  }

  return (
    <div className="InstrumentIdMenu">
      <h1>MAIN MENU</h1>
      <p>Let's learn about different instruments! Click PLAY to play different instruments and click LEARN to learn about and listen to different instruments</p>
      <div className="InstrumentIdMenu-options">
        <Clickable icon={playIcon} text="PLAY" onClick={() => handleChangeMode('play')} />
        <Clickable icon={learnIcon} text="LEARN" onClick={() => handleChangeMode('learn')} />
      </div>
    </div>
  );
};

export default InstrumentIdMenu;