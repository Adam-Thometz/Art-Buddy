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
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [JSON.parse(state), setState];
};

export default useReportCard;