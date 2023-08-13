import { useParams, useNavigate } from "react-router-dom";

import "./LearnFamilyPage.css";

import Icon from "_components/icon/Icon";
import WindowNavbar from "_components/window-nav/WindowNavbar";

import learnInstrumentOptions from "_data/instrument-id/learnInstrumentOptions";
import { instrumentIdUrls } from "_routes/routeUrls";

const LearnFamilyPage = () => {
  const navigate = useNavigate();
  const { family } = useParams();

  const instrumentFamily = learnInstrumentOptions[family];
  const { instruments } = instrumentFamily;
  const options = instruments.map((instrument) => {
    const { name, width, icon } = instrument;
    const goToInstrument = () => {
      const url = `${instrumentIdUrls.learn}/${family}/${name
        .toLowerCase()
        .replace(" ", "-")}`;
      navigate(url);
    };

    return (
      <Icon
        key={name}
        icon={icon}
        size="200px"
        width={width}
        text={name.toUpperCase()}
        onClick={goToInstrument}
      />
    );
  });

  return (
    <>
      <WindowNavbar page="INSTRUMENT ID: LEARN" />
      <div className="LearnFamilyPage">
        <header className="LearnFamilyPage-header">
          <Icon
            icon={instrumentFamily.main}
            text={`THE ${family.toUpperCase()} FAMILY`}
            largeFont
          />
        </header>
        <section className="LearnFamilyPage-options">{options}</section>
      </div>
    </>
  );
};

export default LearnFamilyPage;
