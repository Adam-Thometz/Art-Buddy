import "./Score.css";

const DEFAULT_COLOR = "#D4D2D5";

const Score = ({ name, score, maxScore, colorPalette }) => {
  const createScoreDisplay = () => {
    const scoreDisplay = [];
    const width = `${(100 / maxScore) - 2}%`;
    for (let i = 1; i <= maxScore; i++) {
      const optionalClass = i === 1 || i === maxScore
        ? i === 1
          ? " first"
          : " last"
        : ""
      const backgroundColor = i <= score
        ? colorPalette[i-1]
        : DEFAULT_COLOR
      scoreDisplay.push(
        <div key={i} className={`Score-block${optionalClass}`} alt="" style={{ width, backgroundColor }} />
      );
    }
    return scoreDisplay;
  };

  return (
    <section key={name} className="Score">
      <span>{name}</span>
      <div className="Score-visual-score">{createScoreDisplay()}</div>
      <span className="Score-text-score">
        {score}/{maxScore} passed
      </span>
    </section>
  );
};

export default Score;
