import { useNavigate } from "react-router-dom";

import "./InstrumentId.css";

import WindowNavbar from "components/window-nav/WindowNavbar";
import Icon from "components/icon/Icon";
import Options from "components/option/Options";

import { PLAY_ACTION_BTN } from "assets/_general/general.assets";
import { LEARN_ICON } from "assets/instrument-id/instrumentId.assets";
import { instrumentIdUrls } from "routes/routeUrls";

const InstrumentId = () => {
  const navigate = useNavigate();

  const goToLearn = () => navigate(instrumentIdUrls.learn);
  const goToPlay = () => navigate(instrumentIdUrls.play);

  return (
    <main className="InstrumentId">
      <WindowNavbar page="INSTRUMENT ID" />
      <p className="InstrumentId-instructions">
        Let's learn about instruments! Click LEARN to review your instrument
        knowledge. Click PLAY to test your skills
      </p>
      <Options width="50%">
        <Icon largeFont icon={LEARN_ICON} text="LEARN" onClick={goToLearn} />
        <Icon largeFont icon={PLAY_ACTION_BTN} text="PLAY" onClick={goToPlay} />
      </Options>
    </main>
  );
};

export default InstrumentId;
