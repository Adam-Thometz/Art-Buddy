import useReportCard from '_hooks/report-card/useReportCard';

import './ReportCard.css';

import Score from './score/Score';

import * as reportCards from '_data/_report-cards/initialReportCards';

const ReportCard = ({ game, level = null }) => {
  const [reportCard, setReportCard] = useReportCard(game, level);
  const scoreDisplay = Object.keys(reportCard).map(group => {
    const { name, results, maxScore, colorPalette } = reportCard[group];
    return <Score key={name} name={name} score={results.length} maxScore={maxScore} colorPalette={colorPalette} />;
  });

  const handleClearReportCard = () => setReportCard(reportCards[`${game}ReportCard`]);

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