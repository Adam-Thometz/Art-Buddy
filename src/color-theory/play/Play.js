import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useReportCard from '_hooks/report-card/useReportCard';
import { PopupContext } from '_context/PopupContext';

import Icon from '_components/icon/Icon';
import WindowNavbar from '_components/window-nav/WindowNavbar';

import './Play.css';

import Button from '_components/button/Button';
import ReportCard from '_components/report-card/ReportCard';

import colorTheoryIcon from '_media/menu/activity-icons/color-theory.png';
import reportCardIcon from '_media/_general/report-card.png';
import { colorTheoryUrls } from '_routes/routeUrls';
import { lockIcon, unlockIcon } from "_media/_general/lock-icons/lockIconImports";
import checkHasPassed from '_utils/_report-card/checkHasPassed';

const COLOR_THEORY_GROUPS = ['primary', 'secondary', 'tertiary'];

const Play = () => {
  const navigate = useNavigate();
  const { setCurrPopup } = useContext(PopupContext);
  const [reportCard] = useReportCard('colorTheory');

  useEffect(() => {
    return () => setCurrPopup(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openReportCard = () => setCurrPopup({
    title: 'REPORT CARD',
    popup: <ReportCard game='colorTheory' />
  });

  const levels = COLOR_THEORY_GROUPS.map((level, i) => {
    const goToTest = () => navigate(`${colorTheoryUrls.play}/${i+1}`);
    const unlocked = i === 0 || checkHasPassed(reportCard);
    return (
      <div key={level} className='Play-level'>
        <Button
          small
          colorId={i}
          icon={unlocked ? unlockIcon : lockIcon}
          disabled={!unlocked}
          onClick={goToTest}>Level {i+1}</Button>
        {i === 0
          ? (<div className='Play-report-card' onClick={openReportCard}>
            <img src={reportCardIcon} alt='' />
            <p>Report Card</p>
          </div>)
          : null}
      </div>
    );
  });

  return (<>
    <WindowNavbar page="COLOR THEORY: PLAY" />
    <main className='Play'>
      <header className='Play-icon'>
        <Icon largeFont icon={colorTheoryIcon} text="Color Theory" />
      </header>
      <section className='Play-levels-report-cards'>
        <p className='Play-description'>Complete each level to unlock the next. Your report card will show you your progress. Completing levels will also unlock more colors in Free Paint!</p>
        {levels}
      </section>
    </main>
  </>);
};

export default Play;