import React from 'react';

import './Score.css';

import { first, mid, last } from '_media/general-icons/report-card-bar/iconImports';

const Score = ({ name, score, maxScore, colorPalette }) => {
  const createScoreDisplay = () => {
    const scoreDisplay = [];
    for (let i = 1; i <= maxScore; i++) {
      const src = i === 1 ? first : (i === maxScore ? last : mid);
      if (i <= score) {
        const paletteIdx = i === 1 ? 0 : (i === maxScore ? colorPalette.length-1 : 1);
        const filter = colorPalette[paletteIdx];
        scoreDisplay.push(<img src={src} alt='' style={{ filter }} />);
      } else {
        scoreDisplay.push(<img src={src} alt='' />);
      };
    };
    return scoreDisplay;
  };

  return (
    <section key={name} className='Score'>
      <span>{name}</span>
      <div className='Score-visual-score'>
        {createScoreDisplay()}
      </div>
      <span className='Score-text-score'>{score}/{maxScore} passed</span>
    </section>
  );
};

export default Score;