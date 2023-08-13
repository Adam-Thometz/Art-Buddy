import { useState, useEffect } from "react";

import * as reportCards from "data/_report-cards/initialReportCards";

const useReportCard = (game, level = null) => {
  const key = `${game}-${level ? level : 0}-report-card`;
  const defaultReportCard = reportCards[`${game}ReportCard`];

  const initialValue = localStorage.getItem(key);
  const [reportCard, setReportCard] = useState(
    initialValue ? JSON.parse(initialValue) : defaultReportCard
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(reportCard));
  }, [key, reportCard]);

  return [reportCard, setReportCard];
};

export default useReportCard;
