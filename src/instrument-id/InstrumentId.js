import React from "react";
import { useNavigate } from "react-router-dom";

import Clickable from "../_components/clickable-icon/Clickable";
import Options from "../_components/option/Options";

import { playIcon, learnIcon } from "./_icons/iconImports";
import { instrumentIdUrls } from "../_routes/routeUrls";

const InstrumentId = () => {
  const navigate = useNavigate();
  return (
    <div className="InstrumentId">
      <div className="InstrumentIdMenu">
        <h1>MAIN MENU</h1>
        <p>Let's learn about different instruments! Click PLAY to play different instruments and click LEARN to learn about and listen to different instruments</p>
        <Options width="60%">
          <Clickable icon={playIcon} text="PLAY" onClick={() => navigate(instrumentIdUrls.playUrl)} />
          <Clickable icon={learnIcon} text="LEARN" onClick={() => navigate(instrumentIdUrls.learnUrl)} />
        </Options>
      </div>
    </div>
  );
};

export default InstrumentId;