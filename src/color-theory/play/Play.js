import React from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '_components/icon/Icon';
import WindowNavbar from '_components/window-nav/WindowNavbar';

import './Play.css';

import Button from '_components/button/Button';
import Popup from '_components/popup/Popup';
import ReportCard from '_components/report-card/ReportCard';

import colorTheoryIcon from '_media/menu/activity-icons/color-theory.png';
import reportCardIcon from '_media/_general/report-card.png';
import { colorTheoryUrls } from '_routes/routeUrls';

const Play = () => {
  const navigate = useNavigate();

  const popupTrigger = (
    <>
      <img src={reportCardIcon} alt='' />
      <p>Report Card</p>
    </>
  );

  const levels = [1,2,3].map(level => {
    const goToTest = () => navigate(`${colorTheoryUrls.play}/${level}`);
    return (
      <div key={level} className='Play-level'>
        <Button small colorId={level-1} onClick={goToTest}>Level {level}</Button>
        <Popup
          title='REPORT CARD'
          trigger={popupTrigger}
          triggerClass='Play-report-card'
          popup={<ReportCard game='colorTheory' level={level} />}
        />
      </div>
    )
  })

  return (<>
    <WindowNavbar page="COLOR THEORY: PLAY" />
    <main className='Play'>
      <header className='Play-icon'>
        <Icon largeFont icon={colorTheoryIcon} text="Color Theory" />
      </header>
      <section className='Play-levels-report-cards'>
        <p>Complete each level to unlock the next. Your report card will show you your progress. Completing levels will also unlock more colors in Free Paint!</p>
        {levels}
      </section>
    </main>
  </>);
};

export default Play;