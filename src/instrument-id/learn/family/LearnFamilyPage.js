import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './LearnFamilyPage.css'

import Icon from "../../../_components/icon/Icon";

import learnInstrumentOptions from "../../learnInstrumentOptions";
import { instrumentIdUrls } from "../../../_routes/routeUrls";

const LearnFamilyPage = () => {
  const navigate = useNavigate();
  const { family } = useParams();
  const instrumentFamily = learnInstrumentOptions[family];
  const { instruments } = instrumentFamily;
  return (
    <div className="LearnFamilyPage">
      <div className="LearnFamilyPage-header">
        <Icon
          icon={instrumentFamily.main}
          text={`THE ${family.toUpperCase()} FAMILY`}
          largeFont
        />
      </div>
      <div className="LearnFamilyPage-options">
        {instruments.map(instrument => (
          <Icon
            icon={instrument.icon}
            size='150px'
            text={instrument.name.toUpperCase()}
            largeFont
            onClick={() => navigate(`${instrumentIdUrls.learnUrl}/${family}/${instrument.name.toLowerCase().replace(' ', '-')}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnFamilyPage;