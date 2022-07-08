import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import './LearnFamilyPage.css';

import Icon from "_components/icon/Icon";
import WindowNavbar from "_components/window-nav/WindowNavbar";
import Help from "_components/help/Help";

import learnInstrumentOptions from "../../learnInstrumentOptions";
import { instrumentIdUrls } from "_routes/routeUrls";

const LearnFamilyPage = () => {
  const navigate = useNavigate();
  const { family } = useParams();
  const instrumentFamily = learnInstrumentOptions[family];
  const { instruments } = instrumentFamily;

  const options = instruments.map(instrument => {
    const goToInstrument = () => {
      const url = `${
        instrumentIdUrls.learnUrl
      }/${
        family
      }/${
        instrument.name.toLowerCase().replace(' ', '-')
      }`;
      navigate(url);
    };

    return (<Icon
      key={instrument.name}
      icon={instrument.icon}
      size='200px'
      width={instrument.name === 'TROMBONE' ? '250px' : null}
      text={instrument.name.toUpperCase()}
      onClick={goToInstrument}
    />);
  });
  
  return (
    <main className="LearnFamilyPage">
      <WindowNavbar page='INSTRUMENT ID: LEARN' cornerIcon={<Help />} />
      <div className="LearnFamilyPage-main">
        <header className="LearnFamilyPage-header">
          <Icon icon={instrumentFamily.main} text={`THE ${family.toUpperCase()} FAMILY`} largeFont />
        </header>
        <section className="LearnFamilyPage-options">
          {options}
        </section>
      </div>
    </main>
  );
};

export default LearnFamilyPage;