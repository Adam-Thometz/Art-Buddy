import { useState, useEffect } from 'react';

export const INITIAL_REPORT_CARD = {
  brass: [],
  electronic: [],
  percussion: [],
  strings: [],
  woodwind: [],
  voice: []
};

const useReportCard = (level) => {
  const key = `instrument-id-level-${level}-report-card`;
  const initialValue = localStorage.getItem(key) || JSON.stringify(INITIAL_REPORT_CARD);
  const [reportCard, setReportCard] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, reportCard);
  }, [key, reportCard]);

  return [JSON.parse(reportCard), setReportCard];
};

export default useReportCard;