import React from "react";
import { useNavigate } from "react-router-dom";

import './InstrumentId.css';

import WindowNavbar from "../_components/window-nav/WindowNavbar";
import HelpIcon from '../_components/help/HelpIcon'
import Icon from "../_components/icon/Icon";
import Options from "../_components/option/Options";

import { playIcon, learnIcon } from "./_icons/iconImports";
import { instrumentIdUrls } from "../_routes/routeUrls";

const InstrumentId = () => {
  const navigate = useNavigate();
  return (
    <main className="InstrumentId">
      <WindowNavbar page='INSTRUMENT ID' cornerIcon={<HelpIcon />} />
      <p className="InstrumentId-instructions">Let's learn about instruments! Click LEARN to review your instrument knowledge. Click PLAY to test your skills</p>
      <Options width="50%">
        <Icon largeFont icon={learnIcon} text="LEARN" onClick={() => navigate(instrumentIdUrls.learnUrl)} />
        <Icon largeFont icon={playIcon} text="PLAY" onClick={() => navigate(instrumentIdUrls.playUrl)} />
      </Options>
    </main>
  );
};

export default InstrumentId;