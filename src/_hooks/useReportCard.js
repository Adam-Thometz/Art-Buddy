import { useState, useEffect } from 'react';

export const INITIAL_REPORT_CARD = {
  brass: [],
  electronic: [],
  percussion: [],
  strings: [],
  woodwind: [],
  voice: []
}

const useReportCard = (key) => {
  const initialValue = localStorage.getItem(key) || JSON.stringify(INITIAL_REPORT_CARD);
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export default useReportCard;