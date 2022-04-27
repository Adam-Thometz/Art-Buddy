import React from "react";

import './LearnFamilyPage.css'

import Clickable from "../../_components/clickable-icon/Clickable";

import learnOptions from "./learnOptions";

const LearnFamilyPage = ({ family }) => {
  // debugger;
  const instrumentFamily = learnOptions[family];
  const { instruments } = instrumentFamily;
  return (
    <div className="LearnFamilyPage">
      <div className="LearnFamilyPage-header">
        <Clickable
          icon={instrumentFamily.main}
          text={`THE ${family.toUpperCase()} FAMILY`}
        />
      </div>
      <div className="LearnFamilyPage-options">
        {instruments.map(instrument => (
          <Clickable
            icon={instrument.icon}
            size='150px'
            text={instrument.name.toUpperCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default LearnFamilyPage;