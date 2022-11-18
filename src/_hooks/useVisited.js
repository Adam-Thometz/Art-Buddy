import { useState, useEffect } from 'react';

const useVisited = (id = null) => {
  const key = id ? `visited-${id}` : 'visited';
  const initialValue = localStorage.getItem(key) || false;
  const [hasVisited, setHasVisited] = useState(JSON.parse(initialValue));
  
  useEffect(() => {
    localStorage.setItem(
      key,
      hasVisited ? true : false
    )
  }, [key, hasVisited]);

  return [hasVisited, setHasVisited];
}

export default useVisited;