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

  const options = instruments.map(instrument => (
    <Icon
      icon={instrument.icon}
      size='200px'
      width={instrument.name === 'TROMBONE' ? '250px' : null}
      text={instrument.name.toUpperCase()}
      onClick={() => navigate(`${instrumentIdUrls.learnUrl}/${family}/${instrument.name.toLowerCase().replace(' ', '-')}`)}
    />
  ));
  
  return (
    <main className="LearnFamilyPage">
      <header className="LearnFamilyPage-header">
        <Icon
          icon={instrumentFamily.main}
          text={`THE ${family.toUpperCase()} FAMILY`}
          largeFont
        />
      </header>
      <section className="LearnFamilyPage-options">
        {options}
      </section>
    </main>
  );
};

export default LearnFamilyPage;