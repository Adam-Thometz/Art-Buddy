import React from "react";

import { useDispatch } from "react-redux";
import { changeFamily, changeMode } from "../../_redux/actions/actions";

import './Learn.css';

import Button from "../../_components/button/Button";
import Clickable from "../../_components/clickable-icon/Clickable";

import { trumpetIcon, synthIcon, drumSetIcon, harpIcon, clarinetIcon } from "../icons/iconImports";

const Learn = () => {
  const dispatch = useDispatch();
  const goBack = () => {
    dispatch(changeMode(null));
  }

  const handleChangeFamily = e => {
    dispatch(changeFamily(e.currentTarget.title))
  }

  return (
    <div className="Learn">
      <Button small colorId={3} onClick={goBack}>GO BACK</Button>
      <h1>This is the LEARN page</h1>
      <p>Pick an instrument family to learn more</p>
      <div className="Learn-options">
        <Clickable onClick={handleChangeFamily} icon={trumpetIcon} text="BRASS" />
        <Clickable onClick={handleChangeFamily} icon={synthIcon} text="ELECTRONIC" />
        <Clickable onClick={handleChangeFamily} icon={drumSetIcon} text="PERCUSSION" />
        <Clickable onClick={handleChangeFamily} icon={harpIcon} text="STRINGS" />
        <Clickable onClick={handleChangeFamily} icon={clarinetIcon} text="WOODWIND" />
      </div>
    </div>
  );
};

export default Learn;