import React from "react";

import { useDispatch } from "react-redux";
import { changeMode } from "../../_redux/actions/actions";

import Button from "../../_components/button/Button";
import Clickable from "../../_components/clickable-icon/Clickable";
import Options from "../../_components/option/Options";

import { songMaker, listeningSkills } from "../_icons/iconImports";

const Play = () => {
  const dispatch = useDispatch();
  const goBack = () => {
    dispatch(changeMode(null));
  }
  return (
    <div className="Play">
      <Button small colorId={3} onClick={goBack}>GO BACK</Button>
      <h1>This is the PLAY page</h1>
      <p>Song Maker ot Listening Skills test?</p>
      <Options width="65%">
        <Clickable icon={songMaker} text="SONG MAKER" />
        <Clickable icon={listeningSkills} text="LISTENING SKILLS" />
      </Options>
    </div>
  );
};

export default Play;