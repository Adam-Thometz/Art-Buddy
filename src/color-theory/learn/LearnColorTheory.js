import { useNavigate } from "react-router-dom";

import "./LearnColorTheory.css";

import Icon from "_components/icon/Icon";
import Options from "_components/option/Options";
import WindowNavbar from "_components/window-nav/WindowNavbar";
import { colorTheoryUrls } from "_routes/routeUrls";

import primary from "_media/color-theory/primary.png";
import secondary from "_media/color-theory/secondary.png";
import tertiary from "_media/color-theory/tertiary.png";

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
          <Icon largeFont icon={primary} text="PRIMARY COLORS" onClick={goToPrimary} />
          <Icon largeFont icon={secondary} text="SECONDARY COLORS" onClick={goToSecondary} />
          <Icon largeFont icon={tertiary} text="TERTIARY COLORS" onClick={goToTertiary} />
        </Options>
      </main>
    </>
  );
};

export default Learn;
