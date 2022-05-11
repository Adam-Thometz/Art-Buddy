export const INITIAL_REPORT_CARD = {
  brass: [],
  electronic: [],
  percussion: [],
  string: [],
  woodwind: [],
  voice: []
}

function getReportCards(level) {
  const reportCard = JSON.parse(localStorage.get(`instrument-id-level-${level}-report-card`)) || INITIAL_REPORT_CARD;
  return reportCard;
}

export default getReportCards;