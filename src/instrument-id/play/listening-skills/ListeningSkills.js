import React from "react";
import { useNavigate } from "react-router-dom";

import './ListeningSkills.css';

import Button from "../../../_components/button/Button";
import Icon from "../../../_components/icon/Icon";
import Popup from "../../../_components/popup/Popup";
import ReportCard from "../report-card/ReportCard";
import WindowNavbar from "../../../_components/window-nav/WindowNavbar";
import HelpIcon from "../../../_components/help/HelpIcon";

import { listeningSkills, reportCardIcon } from "../../_icons/iconImports";
import { instrumentIdUrls } from "../../../_routes/routeUrls";

const ListeningSkills = () => {
  const navigate = useNavigate();

  const popupTrigger = (
    <>
      <img src={reportCardIcon} alt='' />
      <p>Report Card</p>
    </>
  );

  const levels = [1,2].map(level => {
    const handleNavigate = () => navigate(`${instrumentIdUrls.playListeningUrl}/${level}`);
    return (
      <div key={level} className="ListeningSkills-level">
        <Button
          small
          colorId={level-1}
          onClick={handleNavigate}
        >Level {level}</Button>
        <Popup
          title='REPORT CARD'
          trigger={popupTrigger}
          triggerClass='ListeningSkills-report-card'
          popup={<ReportCard level={level} />}
        />
      </div>
    );
  });

  return (
    <main className="ListeningSkills">
      <WindowNavbar page='INSTRUMENT ID: PLAY' cornerIcon={<HelpIcon />} />
      <div className="ListeningSkills-main">
        <header className="ListeningSkills-icon">
          <Icon
            largeFont
            icon={listeningSkills}
            text='Listening Skills Test'
          />
        </header>
        <section className="ListeningSkills-levels-report-cards">
          <p>Practice your listening skills to unlock instruments that you can play later on the Song Maker section!</p>
          {levels}
        </section>
      </div>
    </main>
  );
};

export default ListeningSkills;