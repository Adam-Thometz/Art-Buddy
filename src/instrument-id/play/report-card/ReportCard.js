import React from 'react';

import { useSelector } from 'react-redux';

import './ReportCard.css';

import { emptyFirst, emptyMid, emptyLast, fullFirst, fullMid, fullLast } from './_icons/iconImports';

const ReportCard = ({ level }) => {
  const reportCard = useSelector(state => state.instrumentId[`reportCard${level}`]);
  
  const scoreDisplay = Object.keys(reportCard).map(family => {
    const score = reportCard[family].length;
    const maxScore = 4;
    return (
      <div className='ReportCard-score-display'>
        <span>{family.toUpperCase()} FAMILY</span>
        <div className='ReportCard-visual-score'>
          <img src={score >= 1 ? fullFirst : emptyFirst} alt='' />
          <img src={score >= 2 ? fullMid : emptyMid} alt='' />
          <img src={score >= 3 ? fullMid : emptyMid} alt='' />
          <img src={score === maxScore ? fullLast : emptyLast} alt='' />
        </div>
        <span className='ReportCard-text-score'>{score}/{maxScore} passed</span>
      </div>
    );
  });

  return (
    <div className='ReportCard'>
      {scoreDisplay}
    </div>
  );
}

export default ReportCard;