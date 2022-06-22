import { useState, useEffect } from "react";

const useRoster = () => { 
  const allRosters = JSON.parse(localStorage.getItem('rosters')) || {};
  const [rosters, setRosters] = useState(allRosters);
  
  useEffect(() => {
    localStorage.setItem('rosters', JSON.stringify(rosters));
  }, [rosters]);

  return [rosters, setRosters];
};

export default useRoster;