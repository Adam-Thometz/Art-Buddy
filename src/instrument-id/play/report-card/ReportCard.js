import React from 'react';

import { useSelector } from 'react-redux';

import './ReportCard.css';

import { emptyFirst, emptyMid, emptyLast, fullFirst, fullMid, fullLast } from './_icons/iconImports';
import learnInstrumentOptions from '../../learnInstrumentOptions';

const ReportCard = ({ level }) => {
  const reportCard = useSelector(state => state.instrumentId[`reportCard${level}`]);
  const scoreDisplay = Object.keys(reportCard).map(family => {
    const score = reportCard[family].length;
    const maxScore = learnInstrumentOptions[family].instruments.length;
    const midRange = Array.from({length: maxScore-2}, (x, i) => i+1)
    const midScoreDisplay = midRange.map(s => (
      <img src={score >= s ? fullMid : emptyMid} alt='' />
    ))
    return (
      <div className='ReportCard-score-display'>
        <span>{family.toUpperCase()} FAMILY</span>
        <div className='ReportCard-visual-score'>
          <img src={score >= 1 ? fullFirst : emptyFirst} alt='' />
          {midScoreDisplay}
          <img src={score === maxScore ? fullLast : emptyLast} alt='' />
        </div>
        <span className='ReportCard-text-score'>{score}/{maxScore} passed</span>
      </div>
    )
  });

  return (
    <div className='ReportCard'>
      {scoreDisplay}
    </div>
  );
}

export default ReportCard;