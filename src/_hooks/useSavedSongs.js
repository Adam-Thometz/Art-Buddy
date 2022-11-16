import { useState, useEffect } from 'react';

const useSavedSongs = () => {
  const initialValue = localStorage.getItem('instrument-id-saved-songs') || '[]';
  const [songs, setSongs] = useState(initialValue !== '[]'
    ? JSON.parse(initialValue)
    : []
  );

  useEffect(() => {
    localStorage.setItem(
      'instrument-id-saved-songs',
      JSON.stringify(Array.from(songs))
    );
  }, [songs]);

  return [new Map(songs), setSongs];
};

export default useSavedSongs;