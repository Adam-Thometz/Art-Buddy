import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useReportCard from "hooks/report-card/useReportCard";
import { PopupContext } from "context/PopupContext";

import "./Play.css";

import Icon from "components/icon/Icon";
import WindowNavbar from "components/window-nav/WindowNavbar";
import Button from "components/button/Button";
import ReportCard from "components/report-card/ReportCard";

import checkHasPassed from "utils/_report-card/checkHasPassed";
import { COLOR_THEORY_ICON } from "assets/menu/menu.assets";
import { REPORT_CARD, LOCKED, UNLOCKED } from "assets/_general/general.assets";
import { colorTheoryUrls } from "routes/routeUrls";
import { COLOR_THEORY_LEVELS } from "data/color-theory/levels";

const Play = () => {
  const navigate = useNavigate();
  const { setCurrPopup } = useContext(PopupContext);
  const [reportCard] = useReportCard("colorTheory");

  useEffect(() => {
    return () => setCurrPopup(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openReportCard = () =>
    setCurrPopup({
      title: "REPORT CARD",
      popup: <ReportCard game="colorTheory" />,
    });

  const levels = COLOR_THEORY_LEVELS.map((level, i, arr) => {
    const goToTest = () => navigate(`${colorTheoryUrls.playMain}/${i + 1}`);
    const unlocked =
      i === 0 ||
      checkHasPassed(reportCard, [`${arr[i - 1]}A`, `${arr[i - 1]}B`]);
    return (
      <div key={level} className="Play-level">
        <Button
          small
          colorId={i}
          icon={unlocked ? UNLOCKED : LOCKED}
          disabled={!unlocked}
          onClick={goToTest}
        >
          Level {i + 1}
        </Button>
        {i === 0 ? (
          <div className="Play-report-card" onClick={openReportCard}>
            <img src={REPORT_CARD} alt="" />
            <p>Report Card</p>
          </div>
        ) : null}
      </div>
    );
  });

  return (
    <>
      <WindowNavbar page="COLOR THEORY: PLAY" />
      <main className="Play">
        <header className="Play-icon">
          <Icon largeFont icon={COLOR_THEORY_ICON} text="Color Theory" />
        </header>
        <section className="Play-levels-report-cards">
          <p className="Play-description">
            Complete each level to unlock the next. Your report card will show
            you your progress. Completing levels will also unlock more colors in
            Free Paint!
          </p>
          {levels}
        </section>
      </main>
    </>
  );
};

export default Play;
