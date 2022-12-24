import React from "react";
import { useNavigate } from "react-router-dom";
import useReportCard from "_hooks/useReportCard";

import './ListeningSkills.css';

import Button from "_components/button/Button";
import Icon from "_components/icon/Icon";
import Popup from "_components/popup/Popup";
import WindowNavbar from "_components/window-nav/WindowNavbar";
import ReportCard from "_components/report-card/ReportCard";

import { listeningSkills, reportCardIcon } from "_media/instrument-id/_icons/iconImports";
import { lockIcon, unlockIcon } from "_media/_general/lock-icons/lockIconImports";
import { instrumentIdUrls } from "_routes/routeUrls";
import checkHasPassed from "_utils/_report-card/checkHasPassed";

const ListeningSkills = () => {
  const navigate = useNavigate();
  const [reportCard1] = useReportCard('instrumentId', 1);
  // const [reportCard2] = useReportCard('instrumentId', 2);
  const reportCardsToCheck = [null, reportCard1];

  const popupTrigger = (<>
    <img src={reportCardIcon} alt='' />
    <p>Report Card</p>
  </>);

  const levels = reportCardsToCheck.map((reportCard, i) => {
    const goToTest = () => navigate(`${instrumentIdUrls.playListening}/${i+1}`);
    const unlocked = i === 0 ? true : checkHasPassed(reportCard);
    return (
      <div key={i+1} className="ListeningSkills-level">
        <Button
          small
          colorId={i}
          icon={unlocked ? unlockIcon : lockIcon}
          disabled={!unlocked}
          onClick={goToTest}
        >Level {i+1}</Button>
        <Popup
          title='REPORT CARD'
          trigger={popupTrigger}
          triggerClass='ListeningSkills-report-card'
          popup={<ReportCard game='instrumentId' level={i+1} />}
        />
      </div>
    );
  });

  return (<>
    <WindowNavbar page='INSTRUMENT ID: PLAY' />
    <div className="ListeningSkills">
      <header className="ListeningSkills-icon">
        <Icon largeFont icon={listeningSkills} text='Listening Skills Test' />
      </header>
      <section className="ListeningSkills-levels-report-cards">
        <p>Practice your listening skills to unlock instruments that you can play later on the Song Maker section!</p>
        {levels}
      </section>
    </div>
  </>);
};

export default ListeningSkills;