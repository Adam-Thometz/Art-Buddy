import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useReportCard from "_hooks/report-card/useReportCard";
import { PopupContext } from "_context/PopupContext";

import "./ListeningSkills.css";

import Button from "_components/button/Button";
import Icon from "_components/icon/Icon";
import WindowNavbar from "_components/window-nav/WindowNavbar";
import ReportCard from "_components/report-card/ReportCard";

import { LISTENING_SKILLS_ICON } from "_media/instrument-id/instrumentId.assets";
import { REPORT_CARD, UNLOCKED, LOCKED } from "_media/_general/general.assets";
import { instrumentIdUrls } from "_routes/routeUrls";
import checkHasPassed from "_utils/_report-card/checkHasPassed";

const ListeningSkills = () => {
  const navigate = useNavigate();
  const [reportCard1] = useReportCard("instrumentId", 1);
  const reportCardsToCheck = [null, reportCard1];
  const { setCurrPopup } = useContext(PopupContext);

  useEffect(() => {
    return () => setCurrPopup(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openReportCard = (e) => {
    const { id } = e.target;
    setCurrPopup({
      title: `REPORT CARD LEVEL ${id}`,
      popup: <ReportCard game="instrumentId" level={id} />,
    });
  };

  const levels = reportCardsToCheck.map((reportCard, i) => {
    const currLevel = i + 1;
    const goToTest = () =>
      navigate(`${instrumentIdUrls.playListening}/${currLevel}`);
    const unlocked = i === 0 ? true : checkHasPassed(reportCard);
    return (
      <div key={currLevel} className="ListeningSkills-level">
        <Button
          small
          colorId={i}
          icon={unlocked ? UNLOCKED : LOCKED}
          disabled={!unlocked}
          onClick={goToTest}
        >
          Level {currLevel}
        </Button>
        <div className="ListeningSkills-report-card" onClick={openReportCard}>
          <img src={REPORT_CARD} alt="" id={currLevel} />
          <p id={currLevel}>Report Card</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <WindowNavbar page="INSTRUMENT ID: PLAY" />
      <div className="ListeningSkills">
        <header className="ListeningSkills-icon">
          <Icon largeFont icon={LISTENING_SKILLS_ICON} text="Listening Skills Test" />
        </header>
        <section className="ListeningSkills-levels-report-cards">
          <p>
            Practice your listening skills to unlock instruments that you can
            play later on the Song Maker section!
          </p>
          {levels}
        </section>
      </div>
    </>
  );
};

export default ListeningSkills;
