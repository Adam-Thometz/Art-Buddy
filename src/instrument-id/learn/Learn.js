import React from "react";
import { useNavigate } from "react-router-dom";

import './Learn.css';

import Button from "../../_components/button/Button";
import Clickable from "../../_components/clickable-icon/Clickable";
import Options from "../../_components/option/Options";

import { instrumentIdUrls } from "../../_routes/routeUrls";

import { trumpetIcon, synthIcon, drumSetIcon, harpIcon, clarinetIcon } from "../_icons/iconImports";

const Learn = () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/instrument-id')
  }

  return (
    <div className="Learn">
      <Button small colorId={3} onClick={goBack}>GO BACK</Button>
      <h1>This is the LEARN page</h1>
      <p>Pick an instrument family to learn more</p>
      <Options>
        <Clickable onClick={() => navigate(instrumentIdUrls.learnBrassUrl)} icon={trumpetIcon} text="BRASS" />
        <Clickable onClick={() => navigate(instrumentIdUrls.learnElectronicUrl)} icon={synthIcon} text="ELECTRONIC" />
        <Clickable onClick={() => navigate(instrumentIdUrls.learnPercussionUrl)} icon={drumSetIcon} text="PERCUSSION" />
        <Clickable onClick={() => navigate(instrumentIdUrls.learnStringsUrl)} icon={harpIcon} text="STRINGS" />
        <Clickable onClick={() => navigate(instrumentIdUrls.learnWoodwindUrl)} icon={clarinetIcon} text="WOODWIND" />
      </Options>
    </div>
  );
};

export default Learn;