import React from "react";

import { useDispatch } from "react-redux";
import { changeMode } from "../../_redux/actions/actions";

import Button from "../../_components/button/Button";

const Play = () => {
  const dispatch = useDispatch();
  const goBack = () => {
    dispatch(changeMode(null));
  }
  return (
    <div className="Play">
      <Button small colorId={3} onClick={goBack}>GO BACK</Button>
      <h1>This is the PLAY page</h1>
    </div>
  );
};

export default Play;