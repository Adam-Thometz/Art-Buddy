import './Score.css';

import { first, mid, last } from '_media/_general/report-card-bar/iconImports';

const Score = ({ name, score, maxScore, colorPalette }) => {
  const createScoreDisplay = () => {
    const scoreDisplay = [];
    const width = `${100/maxScore - 2}%`;
    for (let i = 1; i <= maxScore; i++) {
      const src = i === 1
        ? first 
        : i === maxScore
          ? last
          : mid;
      if (i <= score) {
        const paletteIdx = i-1;
        const filter = colorPalette[paletteIdx];
        scoreDisplay.push(<img key={i} src={src} alt='' style={{ width, filter }} />);
      } else {
        scoreDisplay.push(<img key={i} src={src} alt='' style={{ width }} />);
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