import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue = null) => {
  const initialValue = localStorage.getItem(key) || defaultValue;
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    state === null
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;