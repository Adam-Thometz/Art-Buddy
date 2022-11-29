import React from 'react';
import useReportCard from '_hooks/useReportCard';

import './ReportCard.css';

import * as reportCards from '_data/_report-cards/initialReportCards';
import { emptyFirst, emptyMid, emptyLast, fullFirst, fullMid, fullLast } from '_media/instrument-id/_icons/iconImports';

const ReportCard = ({ game, level = null }) => {
  const [reportCard, setReportCard] = useReportCard(game, level);

  const scoreDisplay = Object.keys(reportCard).map(group => {
    const score = reportCard[group].length;
    const maxScore = 4;

    return (
      <section key={group} className='ReportCard-score-display'>
        <span>{group.toUpperCase()}</span>
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

  const handleClearReportCard = () => setReportCard(reportCards[game]);

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