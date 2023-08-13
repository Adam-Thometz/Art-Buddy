import { useNavigate } from "react-router-dom";

import "./LearnColorTheory.css";

import Icon from "components/icon/Icon";
import Options from "components/option/Options";
import WindowNavbar from "components/window-nav/WindowNavbar";
import { colorTheoryUrls } from "routes/routeUrls";

import { PRIMARY_ICON, SECONDARY_ICON, TERTIARY_ICON } from "assets/color-theory/colorTheory.assets";

const Learn = () => {
  const navigate = useNavigate();

  const goToPrimary = () => navigate(`${colorTheoryUrls.learn}/primary`);
  const goToSecondary = () => navigate(`${colorTheoryUrls.learn}/secondary`);
  const goToTertiary = () => navigate(`${colorTheoryUrls.learn}/tertiary`);

  return (
    <>
      <WindowNavbar page="COLOR THEORY" />
      <main className="LearnColorTheory">
        <span>Learn</span>
        <br />
        <Options width="80%">
          <Icon largeFont icon={PRIMARY_ICON} text="PRIMARY COLORS" onClick={goToPrimary} />
          <Icon largeFont icon={SECONDARY_ICON} text="SECONDARY COLORS" onClick={goToSecondary} />
          <Icon largeFont icon={TERTIARY_ICON} text="TERTIARY COLORS" onClick={goToTertiary} />
        </Options>
      </main>
    </>
  );
};

export default Learn;
