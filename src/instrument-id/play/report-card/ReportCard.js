import React from 'react';
import useReportCard, { INITIAL_REPORT_CARD } from '_hooks/useReportCard';

import './ReportCard.css';

import { emptyFirst, emptyMid, emptyLast, fullFirst, fullMid, fullLast } from '_media/instrument-id/_icons/iconImports';

const ReportCard = ({ level }) => {
  const [savedReportCard, setSavedReportCard] = useReportCard(level);

  const scoreDisplay = Object.keys(savedReportCard).map(family => {
    const score = savedReportCard[family].length;
    const maxScore = 4;
    return (
      <section key={family} className='ReportCard-score-display'>
        <span>{family.toUpperCase()} FAMILY</span>
        <div className='ReportCard-visual-score'>
          <img src={score >= 1 ? fullFirst : emptyFirst} alt='' />
          <img src={score >= 2 ? fullMid : emptyMid} alt='' />
          <img src={score >= 3 ? fullMid : emptyMid} alt='' />
          <img src={score >= maxScore ? fullLast : emptyLast} alt='' />
        </div>
        <span className='ReportCard-text-score'>{score}/{maxScore} passed</span>
      </section>
    );
  });

  const handleClearReportCard = () => setSavedReportCard(JSON.stringify(INITIAL_REPORT_CARD));

  return (
    <main className='ReportCard'>
      <section className='ReportCard-scores'>
        {scoreDisplay}
      </section>
      <p className='ReportCard-clear' onClick={handleClearReportCard}>clear report card</p>
    </main>
  );
};

export default ReportCard;