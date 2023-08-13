import { useNavigate } from "react-router-dom";

import WindowNavbar from "components/window-nav/WindowNavbar";
import Icon from "components/icon/Icon";
import Options from "components/option/Options";

import { PLAY_ACTION_BTN } from "assets/_general/general.assets";
import { LEARN_ICON } from "assets/instrument-id/instrumentId.assets";
import { colorTheoryUrls } from "routes/routeUrls";

const ColorTheory = () => {
  const navigate = useNavigate();

  const goToLearn = () => navigate(colorTheoryUrls.learn);
  const goToPlay = () => navigate(colorTheoryUrls.playMain);

  return (
    <main className="ColorTheory">
      <WindowNavbar page="COLOR THEORY" />
      <p className="ColorTheory-instructions">
        Let’s learn about Color Theory! Click LEARN to reivew your color
        knowledge. Click PLAY to test your skills.
      </p>
      <Options width="50%">
        <Icon largeFont icon={LEARN_ICON} text="LEARN" onClick={goToLearn} />
        <Icon largeFont icon={PLAY_ACTION_BTN} text="PLAY" onClick={goToPlay} />
      </Options>
    </main>
  );
};

export default ColorTheory;
