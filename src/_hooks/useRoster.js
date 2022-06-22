import { useState, useEffect } from "react";

const useRoster = (roster = null) => { 
  const allRosters = JSON.parse(localStorage.getItem('rosters')) || {};
  const [rosters, setRosters] = useState(allRosters);
  
  useEffect(() => {
    localStorage.setItem('rosters', JSON.stringify(rosters));
  }, [rosters]);

  const getRoster = () => {
    return rosters[roster];
  };

  return [rosters, setRosters, getRoster];
};

export default useRoster;