import React from "react";
import { useNavigate } from "react-router-dom";

import './InstrumentId.css';

import Icon from "../_components/icon/Icon";
import Options from "../_components/option/Options";

import { playIcon, learnIcon } from "./_icons/iconImports";
import { instrumentIdUrls } from "../_routes/routeUrls";

const InstrumentId = () => {
  const navigate = useNavigate();
  return (
    <div className="InstrumentId">
      <p className="InstrumentId-instructions">Let's learn about instruments! Click LEARN to review your instrument knowledge. Click PLAY to test your skills</p>
      <Options width="60%">
        <Icon icon={learnIcon} text="LEARN" onClick={() => navigate(instrumentIdUrls.learnUrl)} />
        <Icon icon={playIcon} text="PLAY" onClick={() => navigate(instrumentIdUrls.playUrl)} />
      </Options>
    </div>
  );
};

export default InstrumentId;