import React from 'react';
import WordForm from './word-form/WordForm';
import Word from './word/Word';
import AlphabetTable from './alphabet-table/AlphabetTable'
import { useSelector } from 'react-redux';

const MusicColors = () => {
  const wordDisplay = useSelector(store => store.musicColors.wordDisplay)

  return (
      <div className="App">
        <WordForm />
        <AlphabetTable />
        {wordDisplay.length ? <Word /> : null}
      </div>
  );
}

export default MusicColors;
